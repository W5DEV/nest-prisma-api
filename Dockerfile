FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY /prisma ./ 

RUN npm ci

COPY . .

RUN npx prisma db pull && npx prisma generate

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]