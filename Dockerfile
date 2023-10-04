FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

RUN npm ci

COPY . .

EXPOSE 8000

CMD ["./startup.sh"]