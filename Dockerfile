FROM node:24-alpine

WORKDIR /app
COPY quize.html package.json server.js ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]
