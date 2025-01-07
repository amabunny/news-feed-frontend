FROM node:23 AS builder
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:1.23

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
