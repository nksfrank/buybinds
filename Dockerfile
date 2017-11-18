FROM node:9-alpine

ENV DIR=/src/app NODE_ENV=production

RUN npm install -g browserify watchify

COPY package.json package-lock.json $DIR/
RUN npm install

CMD watchify src/index.js -o build/bundle.js