#!/bin/bash

# Build the application
npm run build

# Build the docker image
docker build -t libdb-svelte-image:latest ./

# Stop and remove any existing docker container
docker stop libdb-svelte-container && docker rm libdb-svelte-container

# Create and run the docker container
docker run -d -p 3000:3000 --network libdb-network --name libdb-svelte-container libdb-svelte-image:latest

# Delete the local build files
rm -r build/