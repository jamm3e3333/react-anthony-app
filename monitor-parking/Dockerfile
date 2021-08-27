FROM node:14.15.0-alpine
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn","start"]