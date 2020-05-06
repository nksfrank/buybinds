FROM node:14.1-stretch as builder

ARG DIR=/usr/app
WORKDIR $DIR
RUN chown -R node:node $DIR
USER node:node
COPY package*.json $DIR/
RUN npm ci --silent

COPY --chown=node:node src src/
ENV NODE_ENV production
RUN npm run build

FROM node:14.1-stretch-slim
ARG DIR=/usr/app
WORKDIR $DIR
RUN chown -R node:node $DIR
USER node:node
COPY --from=builder $DIR/package*.json ./
COPY --from=builder $DIR/dist/ ./dist/
RUN npm ci --production
EXPOSE 5000
CMD npm start