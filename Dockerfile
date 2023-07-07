FROM node:alpine
COPY index.js ./
RUN npm install 
CMD node index.js