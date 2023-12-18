FROM node:18-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm i
RUN npm run build

FROM nginx:stable-alpine
ENV TZ Asia/Ho_Chi_Minh
ENV PROXY_HOST "http://172.17.0.3:3000"
COPY --from=base /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80
