FROM node:12

WORKDIR /strapi-api

COPY ./package.json ./
COPY ./yarn.lock ./

RUN apt-get update -y && \
  apt-get install -y \
    build-essential \
    libglib2.0-dev \
    libpng-dev \
    libvips-dev

RUN yarn install  --network-timeout 1000000000

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]