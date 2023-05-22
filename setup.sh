#!/bin/bash

# Install dependencies for frontend
docker build -t frontend-image ./task-manager-frontend

docker build -t backend-image ./task-manager-server

docker run -d -p 5000:5000 frontend-image
docker run -d -p 3000:3000 backend-image