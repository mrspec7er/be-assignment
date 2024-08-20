FROM node:22-bookworm

WORKDIR /schema

COPY package.json ./

ENV DATABASE_URL=postgresql://postgres:mrc201@db:5432/be-assignment?schema=public

RUN npm install

COPY . .

EXPOSE 8080

RUN chmod +x start.sh

CMD ./start.sh