# Stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/noredlace-server-monitor /usr/share/nginx/html


