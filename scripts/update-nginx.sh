#!/bin/bash

NGINX_FILE_PATH=/etc/nginx/ccxlv.dev/default.conf

OLD_FRONTEND=${1}
NEW_FRONTEND=${2}

echo "Updating nginx.conf to switch traffic to the new port..."
sed "s/server $OLD_FRONTEND:3000;/server $NEW_FRONTEND:3000;/g" $NGINX_FILE_PATH > $NGINX_FILE_PATH.tmp
mv $NGINX_FILE_PATH.tmp $NGINX_FILE_PATH

max_retries=5
count=0

until docker exec nginx nginx -s reload; do
  count=$((count+1))
  if [ $count -ge $max_retries ]; then
    echo "⚠️ Could not reload Nginx after $max_retries attempts."
    break
  fi
  echo "Nginx not ready, retrying in 2s... ($count/$max_retries)"
  sleep 2
done

[ $count -lt $max_retries ] && echo "✅ Nginx reloaded successfully"

echo "Tearing down old container on port $OLD_FRONTEND..."
docker stop $OLD_FRONTEND || true
docker rm $OLD_FRONTEND || true

echo "Nginx updated successfully!"
