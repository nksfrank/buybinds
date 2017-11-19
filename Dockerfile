FROM node:9-alpine as builder

RUN adduser -S buybinds
RUN npm install -g browserify watchify
ARG DIR=/src/app

ENV PATH /src/app/node_modules/.bin:$PATH

COPY package.json $DIR/
RUN chown -R buybinds /src/*

USER buybinds
WORKDIR $DIR
RUN npm install

FROM builder as watcher

COPY ./src $DIR/src/
COPY ./build $DIR/build/

ENV NODE_ENV=production
CMD watchify --poll=50 -v -d -t [babelify --presets [env react] --sourceMapsAbsolute --only src] src/index.jsx -o build/bundle.js --extension=.jsx
