# Use an official Node runtime as a parent image  
FROM node:16
  
# Set the working directory in the container  
WORKDIR /usr/src/app  
  
# Copy package.json and package-lock.json  
COPY package*.json ./  
  
# Install any needed packages  
RUN npm install  
  
# Bundle app source  
COPY . .  
  
# Build the app  
RUN npm run build  
  
# Install serve package globally to serve the static files  
RUN npm install -g serve  
  
# Make port 3001 available to the world outside this container  
EXPOSE 3001  
  
# Serve the build directory  
CMD ["serve", "-s", "build", "-l", "3001"]  
