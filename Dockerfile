# Build environment

# pull official base image
FROM node:16.17  as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . .

RUN npm run build

# Production environment

# pull official base image
FROM nginx:latest

# Copy
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

# expose port
EXPOSE 3000