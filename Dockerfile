FROM node:11.3-alpine as builder

RUN mkdir /code
WORKDIR /code

COPY package.json .npmrc ./
RUN npm install

FROM node:11.3-alpine

WORKDIR /code

COPY . .
COPY --from=builder /code .

EXPOSE 6060
CMD ["npm", "start"]
