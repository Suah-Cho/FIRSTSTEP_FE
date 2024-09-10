FROM    node:18-alpine AS builder
WORKDIR /app
COPY    package*.json ./
RUN     npm install
COPY    . .
RUN     npm run build

FROM    nginx:1.25.3-alpine AS runtime
COPY    --from=builder /app/build /usr/share/nginx/html/
RUN     rm /etc/nginx/conf.d/default.conf
COPY    nginx.conf /etc/nginx/conf.d
CMD     [ "nginx", "-g", "daemon off;" ]