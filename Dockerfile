FROM node:9-alpine

ENV DIR=/src/app NODE_ENV=production

RUN npm install -g browserify watchify

COPY package.json $DIR/
RUN npm install

COPY ./src $DIR/src/

CMD watchify src/index.js -o build/bundle.js