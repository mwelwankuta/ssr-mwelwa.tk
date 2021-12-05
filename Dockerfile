FROM node:14.15.4 as build

# create a working directory
WORKDIR /app

# copy package*.json
COPY package.json /app/
COPY package-lock.json /app/

# install dependencies
RUN npm install

# copy files
COPY . /app/

# expose port
EXPOSE 3000

# run the app
CMD [ "npm", "run", "dev", "--host"]
