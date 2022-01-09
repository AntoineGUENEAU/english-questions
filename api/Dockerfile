FROM node:14.17.3

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3000
