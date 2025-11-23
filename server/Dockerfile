# ---------------------------------------
# Backend Dockerfile (Express + Node 20)
# ---------------------------------------

FROM node:20-alpine AS dev

WORKDIR /app

# Copy only package files for caching
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose API port
EXPOSE 5000

# Start server in development mode (supports nodemon)
CMD ["npm", "run", "dev"]
