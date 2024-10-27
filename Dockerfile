# Use the Node.js runtime image
FROM node:18-alpine AS base
WORKDIR /app/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Use the Node.js runtime image
FROM node:18-alpine AS runtime
WORKDIR /app/

# Copy the published app to the docker image
COPY build/ ./

# Copy production dependencies from previous stage
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules/ ./node_modules/

# Expose the port the app runs on
EXPOSE 3000

# Launch the application
ENTRYPOINT ["node", "index.js"]