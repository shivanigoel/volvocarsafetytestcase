# docker/Dockerfile
FROM mcr.microsoft.com/playwright

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]