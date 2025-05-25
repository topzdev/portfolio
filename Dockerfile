# Use Node.js 16 as base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Install dependencies and the missing Babel plugin
RUN npm install && \
    npm install --save-dev @babel/plugin-proposal-private-property-in-object

# Copy project files
COPY . .

# Generate static files
RUN npm run generate

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
