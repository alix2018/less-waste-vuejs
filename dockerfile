FROM node:14.17.0

# create destination directory
WORKDIR /less-waste-vuejs

# update and install dependency
RUN apt-get update -y && \
    apt-get upgrade -y

# copy the app, note .dockerignore
COPY . /less-waste-vuejs
RUN npm install
RUN npm rebuild node-sass
RUN npm i -g nodemon

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# start the app
CMD [ "nodemon", "./dist/server.js" ]