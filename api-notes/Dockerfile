# API Dockerfile - Example for Node.js/Express
# Update this based on your chosen backend stack

FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose API port
EXPOSE 3000

# Start the API
CMD ["node", "index.js"]
