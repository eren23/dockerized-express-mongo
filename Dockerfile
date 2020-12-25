FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080 
ENV USER "youruser"
ENV DB_NAME "yourdbname"
ENV DB_PASSWORD "yourpw"

EXPOSE 8080

CMD [ "npm", "start" ]