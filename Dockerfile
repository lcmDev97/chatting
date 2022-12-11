FROM node:16
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 80
RUN npm run build
RUN echo "다음은 pwd에 대한 정보"
RUN pwd
RUN echo "다음은 ls에 대한 정보"
RUN ls
CMD [ "node", "dist/main.js" ]


# # STEP 1
# FROM node:16 AS builder

# WORKDIR /app

# COPY package.json /app

# RUN npm install

# COPY . /app

# RUN npm run build 

# # STEP 2
# FROM node:16-alpine

# WORKDIR /app

# ENV NODE_ENV prod

# COPY --from=builder /app ./

# EXPOSE 80

# CMD ["npm", "run", "start"]