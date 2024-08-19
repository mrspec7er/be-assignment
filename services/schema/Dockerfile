FROM node:22-bookworm

WORKDIR /schema

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN chmod +x start.sh

CMD ./start.sh