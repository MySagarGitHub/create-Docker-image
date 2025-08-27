FROM node:latest

RUN npm install -g nodemon
WORKDIR /app
COPY . .


EXPOSE 3000

CMD ["npm", "run", "dev"]

