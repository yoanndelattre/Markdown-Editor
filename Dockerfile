FROM node:lts-alpine as builder
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY Contents-image/default /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build/. /usr/share/nginx/html/
EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]