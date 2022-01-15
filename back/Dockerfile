FROM node:lts-alpine

RUN mkdir app

WORKDIR /app

COPY package* ./

RUN npm install

COPY src ./src

CMD npm start