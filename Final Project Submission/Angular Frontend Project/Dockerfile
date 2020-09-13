# stage 1
FROM node:12.18-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#stage 2
FROM nginx:alpine as prod-stage
COPY --from=build-step /app/dist/library-webUI /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]