# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the TypeScript source code
RUN npm run build:prod

# Build the TypeScript source code
CMD ["node", "dist/index.js"]

# Expose the port on which the server will listen
EXPOSE 80