FROM node:alpine As builder

WORKDIR /app

COPY /*.json ./

RUN npm install

COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=bilder /app ./

EXPOSE 3000

CMD ["node", "run", "start:prod"]