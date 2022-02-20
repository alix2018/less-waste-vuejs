# BUILD DIST FOLER
FROM node:16.14.0 AS builder

# create destination directory
RUN mkdir -p /lesswaste
WORKDIR /lesswaste

# update and install dependency
RUN apt-get update -y

# copy the app, note .dockerignore
COPY . /lesswaste
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# FINAL IMAGE
FROM node:16.14.0

# create destination directory
RUN mkdir -p /lesswaste
WORKDIR /lesswaste

COPY --from=builder /lesswaste/package.json .
COPY --from=builder /lesswaste/package-lock.json .
COPY --from=builder /lesswaste/dist ./dist
RUN npm install

RUN chmod +x ./dist/server.js

# start the app
CMD [ "node", "./dist/server.js" ]