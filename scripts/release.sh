#!/bin/bash

echo "Fetching latest tag from upstream repository..."
LATEST_TAG=$(git ls-remote --tags git@github.com:ccxlv/ccxlv.dev.git | grep -o 'refs/tags/v[0-9]*\.[0-9]*\.[0-9]*' | sed 's/refs\/tags\///' | sort -V | tail -n 1)
echo "Latest tag: $LATEST_TAG"

if [ -z "$LATEST_TAG" ]; then
    echo "No tags found, creating one..."
    NEW_TAG="v0.1.0"
else
    NEW_TAG=v$(echo $LATEST_TAG | awk -F. '{printf "%d.%d.%d\n", $1, $2, $3 + 1}')
fi

echo "Creating new tag: $NEW_TAG"
echo "Pushing new tag to upstream repository..."

git tag $NEW_TAG
git push git@github.com:ccxlv/ccxlv.dev.git $NEW_TAG

echo "New tag created: $NEW_TAG"
echo "Tag pushed to upstream repository"
echo "Release completed successfully!"