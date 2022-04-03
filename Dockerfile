FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci --only=production

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "npm", "start" ]