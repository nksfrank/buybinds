FROM node:9-alpine as builder

RUN addgroup -g 997 -S buybinds && adduser -S -g buybinds buybinds
RUN npm install -g browserify watchify
ARG DIR=/src/app

ENV PATH /src/app/node_modules/.bin:$PATH

COPY package.json $DIR/
RUN chown -R buybinds:buybinds /src/*

USER buybinds:buybinds
WORKDIR $DIR
RUN npm install

COPY service/web $DIR/

ENV NODE_ENV=production
CMD npm start