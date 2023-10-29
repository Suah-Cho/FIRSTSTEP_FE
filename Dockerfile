FROM node AS builder
RUN mkdir /myapp
WORKDIR /myapp
COPY package.json .
RUN npm install
COPY . .
ARG API_SERVER_IP
ARG  API_SERVER_PORT
RUN echo REACT_APP_API_SERVER_IP=${API_SERVER_IP} > .env
RUN echo REACT_APP_API_SERVER_port=${API_SERVER_PORT} >> .env
CMD [ "npm", "start" ]

