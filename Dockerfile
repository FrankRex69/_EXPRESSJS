# Use the Node.js image for the local
FROM node:18.19 AS local

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app

# Copy the file `package.json` from current folder
# inside our image in the folder `/app`
COPY ./package.json /app/package.json

# Install the dependencies
RUN npm install

# Copy all files from current folder
# inside our image in the folder `/app`
COPY . /app

# ------------------------------------------------------------------
# ------------------------------------------------------------------
# ------------------------------------------------------------------

# Use the Node.js image for the development
FROM node:18.19 AS development

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app

# Copy the file `package.json` from current folder
# inside our image in the folder `/app`
COPY ./package.json /app/package.json

# Install the dependencies
RUN npm install

# Copy all files from current folder
# inside our image in the folder `/app`
COPY . /app

# Build the types app
ENTRYPOINT npm run start-dev