#!/bin/bash

DOCKER_NETWORK=app-network
DOCKER_CONTAINER_NAME=frontend
DOCKER_IMAGE=ghcr.io/ccxlv/ccxlv.dev-frontend
NGINX_FILE_PATH=/etc/nginx/ccxlv.dev/default.conf

COMMIT_HASH=${1}
GITHUB_ACTOR=${2}
PAT=${3}
PREV_TAG=${4}
RECENT_TAG=${5}

echo "Starting deployment..."
echo "COMMIT_HASH: $COMMIT_HASH"
echo "GITHUB_ACTOR: $GITHUB_ACTOR"
echo "PREV_TAG: $PREV_TAG"
echo "RECENT_TAG: $RECENT_TAG"

echo "Logging in to GHCR..."
echo "$PAT" | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin || { echo "Failed to log in to GHCR"; exit 1; }

echo "Pulling API image $COMMIT_HASH"
docker pull $DOCKER_IMAGE:${COMMIT_HASH} || { echo "Failed to pull image"; exit 1; }
echo "Pulled API image"

echo "Creating custom network if it doesn't exist..."
docker network create $DOCKER_NETWORK 2>/dev/null || true

echo "Preparing nginx conf file..."
sudo ./scripts/prepare-nginx-conf.sh

echo "Checking which port is mapped to the API container..."
BLUE_PORT=3000
GREEN_PORT=3001
BLUE_FRONTEND=frontend-blue
GREEN_FRONTEND=frontend-green

# Find the current port used by Nginx.
CURRENT=$(grep 'server frontend-' $NGINX_FILE_PATH | sed -E 's/.*frontend-([a-zA-Z]+):.*/\1/')
echo "Current port from nginx.conf: $CURRENT"

# Determine the new port for the "Green" deployment.
if [ "$CURRENT" = "blue" ]; then
  NEW_PORT=$GREEN_PORT
  OLD_PORT=$BLUE_PORT
  NEW_FRONTEND=$GREEN_FRONTEND
  OLD_FRONTEND=$BLUE_FRONTEND
else
  NEW_PORT=$BLUE_PORT
  OLD_PORT=$GREEN_PORT
  NEW_FRONTEND=$BLUE_FRONTEND
  OLD_FRONTEND=$GREEN_FRONTEND
fi
echo "Old port: $OLD_PORT"
echo "New port: $NEW_PORT"

# Cleanup any potential leftover containers on the new port
docker stop $NEW_FRONTEND 2>/dev/null || true
docker rm $NEW_FRONTEND 2>/dev/null || true

echo "Running new container on port $NEW_PORT"
# Run the new container with a predictable name
docker run -d \
  -p $NEW_PORT:3000 \
  --name $NEW_FRONTEND \
  --network $DOCKER_NETWORK \
  --restart=unless-stopped \
  $DOCKER_IMAGE:${COMMIT_HASH} \
|| { echo "Failed to run new container"; exit 1; }

echo "Checking new container health..."
# Check health of the new container, wait for it to be healthy
MAX_WAIT=24
WAITED=0
while [ $WAITED -lt $MAX_WAIT ]; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}\n" http://0.0.0.0:$NEW_PORT)
  if [ "$STATUS" == "200" ]; then
    echo "New container is healthy!"
    break
  fi
  echo "New container not healthy yet, waiting 5 seconds..."
  sleep 5
  WAITED=$((WAITED + 5))
done

if [ "$STATUS" != "200" ]; then
  echo "New container did not become healthy after $MAX_WAIT seconds."
  docker stop $NEW_FRONTEND || true
  docker rm $NEW_FRONTEND || true
  exit 1
fi

echo "Updating nginx..."
sudo ./scripts/update-nginx.sh $OLD_FRONTEND $NEW_FRONTEND

echo "Deployment completed successfully!"
