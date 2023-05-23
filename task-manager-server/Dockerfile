# Use the official Node.js 14 image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Set the environment variable for production
ENV NODE_ENV=production

# Expose the port that the backend server will run on
EXPOSE 3000


# Install MongoDB
RUN apk add --no-cache mongodb

# Copy the seed script
COPY seed.js .

# Start the MongoDB service and run the seed script
CMD mongod --bind_ip_all --dbpath /data/db & sleep 5 && node seed.js && npm start