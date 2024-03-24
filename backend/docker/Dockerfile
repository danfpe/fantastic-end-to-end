# Use the official Node.js 16 image as a parent image  
FROM node:16  
  
# Set the working directory  
WORKDIR /usr/src/app  
  
# Copy package.json and package-lock.json  
COPY package*.json ./  
  
# Install project dependencies  
RUN npm install --only=production 
  
# Bundle app source  
COPY . .  

# build application
RUN npm run build  

# Expose the port the app runs on  
EXPOSE 3000  
  
# Run the app  
CMD [ "npm", "start" ]  
