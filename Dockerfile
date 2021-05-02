FROM node:14.5.0-alpine3.10
RUN apk add --no-cache libc6-compat
RUN apk add libtool automake autoconf nasm dpkg pkgconfig libpng libpng-dev g++ make
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install
# Copying source files
COPY . /usr/src/app
# Building app
RUN npm run build
ENV NODE_ENV production
CMD ["npm", "run","start"]