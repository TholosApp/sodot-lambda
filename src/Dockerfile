FROM ubuntu:latest

WORKDIR /

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

COPY . .

RUN npm install

RUN npm run build
