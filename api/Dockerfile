FROM node:10.11

WORKDIR /app

RUN npm i -g yarn

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY src/ src

ENTRYPOINT [ "yarn", "start" ]
