FROM node:16-alpine

WORKDIR /app

# ENV DB_USER=root \
#     DB_PASS=password

COPY package*.json ./

RUN apk update && apk add bash

RUN npm install

COPY . . 

EXPOSE 3001

VOLUME ["./node_modules" ]

CMD [ "npm", "start"] 





