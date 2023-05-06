FROM node:14-alpine as builder

WORKDIR /build

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
ARG API_URL
ENV API_URL=${API_URL}

RUN echo $API_URL
RUN echo "API_BASE_URL=$API_URL" > .env

RUN npm run build

FROM node:14-alpine

WORKDIR /var/www/application

COPY --from=builder /build  .

EXPOSE 3000

CMD [ "npm", "start" ]
