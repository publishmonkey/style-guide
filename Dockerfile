FROM node:11.2-alpine as builder

RUN mkdir /code
WORKDIR /code

COPY package.json .
RUN npm install

FROM node:11.2-alpine

WORKDIR /code

COPY . .
COPY --from=builder /code .

EXPOSE 6060
CMD ["npm", "start"]
