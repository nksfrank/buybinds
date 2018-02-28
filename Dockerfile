FROM node:9-alpine as builder

RUN addgroup -g 997 -S buybinds && adduser -S -g buybinds buybinds
ARG DIR=/src/app

COPY package*.json $DIR/
RUN chown -R buybinds:buybinds /src/*

USER buybinds:buybinds
WORKDIR $DIR
RUN npm install --production

COPY dist $DIR/dist

CMD npm start