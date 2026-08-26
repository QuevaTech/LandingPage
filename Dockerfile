# Build the static production bundle.
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
# The lockfile contains Decap CMS's React peer-dependency mismatch.
# Keep CI and container installs aligned with the existing project setup.
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# Serve the bundle from a minimal production web server.
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8080/ || exit 1
