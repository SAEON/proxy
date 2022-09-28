FROM node:18.9.1

ARG TZ
ENV TZ=$TZ

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

ARG ELASTICSEARCH_NEXT_ADDRESS=http://localhost:9200
ENV ELASTICSEARCH_NEXT_ADDRESS=$ELASTICSEARCH_NEXT_ADDRESS

ARG ELASTICSEARCH_7_14_ADDRESS=http://localhost:9200
ENV ELASTICSEARCH_7_14_ADDRESS=$ELASTICSEARCH_7_14_ADDRESS

ARG ELASTICSEARCH_8_1_ADDRESS=http://localhost:9200
ENV ELASTICSEARCH_8_1_ADDRESS=$ELASTICSEARCH_8_1_ADDRESS

WORKDIR /app
COPY . .
RUN npm ci --only=production
EXPOSE 8001 8002

CMD \
  ELASTICSEARCH_NEXT_ADDRESS=$ELASTICSEARCH_NEXT_ADDRESS \
  ELASTICSEARCH_7_14_ADDRESS=$ELASTICSEARCH_7_14_ADDRESS \
  ELASTICSEARCH_8_1_ADDRESS=$ELASTICSEARCH_8_1_ADDRESS \
  TZ=$TZ \
  NODE_ENV=$NODE_ENV \
  node --no-warnings --experimental-json-modules src