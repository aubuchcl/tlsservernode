FROM node:alpine
WORKDIR /usr/app
COPY index.js ./
RUN npm install 
CMD node index.js