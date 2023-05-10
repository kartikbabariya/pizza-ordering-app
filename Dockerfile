FROM node:19-alpine3.16 as nodework

# Set the working directory to /app inside the container
WORKDIR /PIZZA_ORDERING_APP

# Copy app files
COPY . .

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci

# Build the app
RUN npm run build

CMD ["npm" , "start"]
# Bundle static assets with nginx
FROM nginx:1.23.4-alpine

# Copy built assets from `builder` image
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=nodework /PIZZA_ORDERING_APP/build .

EXPOSE 80

CMD ["nginx" , "-g" , "daemon off;"]
