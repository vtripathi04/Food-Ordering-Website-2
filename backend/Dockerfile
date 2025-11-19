# 1. Use an official Node.js 20 image
FROM node:20-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (if you have it)
COPY package*.json ./

# 4. Install production dependencies
RUN npm ci --only=production

# 5. Copy the rest of your application code
COPY . .

# 6. Expose the port your app runs on
# Cloud Run will automatically find this
EXPOSE 4000

# 7. Define the command to start your app
# This runs the "start" script from your package.json
CMD [ "npm", "start" ]