# BUILDER
FROM node:8-alpine
WORKDIR /workspace/demo-app/
RUN echo http://mirror.yandex.ru/mirrors/alpine/v3.5/main > /etc/apk/repositories; \
    echo http://mirror.yandex.ru/mirrors/alpine/v3.5/community >> /etc/apk/repositories
RUN apk --no-cache add git

COPY package-lock.json package.json ./
RUN npm i
COPY public ./public
COPY src ./src

ENTRYPOINT [ "npm", "start" ]

EXPOSE 3000
