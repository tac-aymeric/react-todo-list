FROM node:10.11

WORKDIR /app

RUN npm i -g yarn http-server

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY src/ src
COPY public/ public
RUN yarn run build

WORKDIR /app/build

ENTRYPOINT [ "http-server", "-p", "80" ]
