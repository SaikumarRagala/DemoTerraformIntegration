FROM node:8.4.0-alpine

WORKDIR /usr/src/app

ENV MySQL_CONN_STR = "" 
ENV Redis_Endpoint = "" 
ENV ES_ENDPOINT = ""

COPY ./src .

EXPOSE 8801

ENTRYPOINT [ "node", "main.js" ]
