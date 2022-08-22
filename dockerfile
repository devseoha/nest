FROM node:12
WORKDIR /usr/src/back
COPY package.json .
RUN yarn
COPY . .

RUN yarn build
CMD node dist/main