FROM node:12.18-alpine as build-step
WORKDIR /app
COPY /package.json /server.js
RUN npm install
COPY . /app
EXPOSE 90
CMD ["npm", "start"]