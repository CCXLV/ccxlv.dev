#!/bin/bash

NGINX_DIR_PATH=/etc/nginx/ccxlv.dev/
NGINX_FILE_PATH=/etc/nginx/ccxlv.dev/default.conf
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "Preparing nginx conf..."
echo "NGINX_FILE_PATH: $NGINX_FILE_PATH"

sudo mkdir -p $NGINX_DIR_PATH

echo "Checking if nginx conf file exist..."
if [ ! -f $NGINX_FILE_PATH ]; then
  echo "$NGINX_FILE_PATH file does not exist, copying from project root..."
  sudo cp ${PROJECT_ROOT}/docker/nginx.conf $NGINX_FILE_PATH
  echo "Nginx conf files copied successfully"
fi

echo "Nginx conf file prepared successfully!"
ls -la $NGINX_DIR_PATH
