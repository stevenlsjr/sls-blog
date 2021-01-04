FROM ubuntu:groovy

WORKDIR /strapi-api


RUN apt-get update -y && \
  apt-get install -y \
  python  \
  nodejs    \
  node-gyp \
  yarnpkg \
  build-essential \
  libpng-dev \
  libvips-dev && \
  ln /usr/bin/yarnpkg /usr/bin/yarn

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install  --network-timeout 1000000000

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
