FROM node:9-alpine as watcher

ENV DIR=/src/app NODE_ENV=production

RUN npm install -g browserify watchify

FROM watcher as builder
WORKDIR $DIR

COPY package*.json $DIR/
RUN npm install

COPY ./src $DIR/src/

CMD watchify --debug src/index.js -o build/bundle.js -v