# BUILD DIST FOLER
FROM node:14.17.0 AS builder

# create destination directory
RUN mkdir -p /lesswaste
WORKDIR /lesswaste

# update and install dependency
RUN apt-get update -y && \
    apt-get upgrade -y

# copy the app, note .dockerignore
COPY . /lesswaste
RUN npm install
RUN npm rebuild node-sass

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# FINAL IMAGE
FROM node:14.17.0

# create destination directory
RUN mkdir -p /lesswaste
WORKDIR /lesswaste

COPY --from=builder /lesswaste/package.json .
COPY --from=builder /lesswaste/package-lock.json .
COPY --from=builder /lesswaste/dist ./dist
RUN npm install
RUN npm i -g nodemon

EXPOSE 3001
ENV PORT=3001

RUN ls -a

RUN chmod +x ./dist/server.js

# start the app
CMD [ "nodemon", "./dist/server.js" ]