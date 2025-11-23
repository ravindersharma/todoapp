# ---------------------------------------
# Frontend Dockerfile (React + Vite)
# ---------------------------------------

FROM node:20-alpine AS dev

WORKDIR /app

# Copy package files only
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy all frontend source
COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Run Vite development server
CMD ["npm", "run", "dev"]
