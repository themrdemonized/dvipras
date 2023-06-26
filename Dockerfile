FROM node:16 as build-stage

ARG GENERATE_SOURCEMAP
ARG GITHUB_TOKEN

ENV GENERATE_SOURCEMAP $GENERATE_SOURCEMAP
ENV GITHUB_TOKEN $GITHUB_TOKEN

WORKDIR /app
COPY package.json ./

# Notice part below this line
# This is needed for installing private github packages
RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> ~/.npmrc

RUN git config --global url."https://${GITHUB_TOKEN}@github.com".insteadOf "ssh://git@github.com"

RUN npm install
COPY . .

# Removing the github token from npmrc file in below line
RUN echo > ~/.npmrc

RUN npm run build

# этап production (production-stage)
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

