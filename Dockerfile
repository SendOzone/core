FROM node:9.7.1

# yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.7.0

# Cache dependencies
COPY yarn.lock /tmp/yarn.lock
COPY package.json /tmp/package.json
RUN mkdir -p /opt/app && \
    cd /opt/app && \
    cp /tmp/yarn.lock . && \
    cp /tmp/package.json . && \
    yarn install --production

COPY . /opt/app

WORKDIR /opt/app

CMD ["node", "clients/nodejs/index.js"]
