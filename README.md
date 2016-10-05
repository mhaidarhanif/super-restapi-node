# Super Server API Node

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg)](https://github.com/ndelvalle/generator-api)

Super server RESTful API with Node.js Express

## Dependencies

- Node 6+
- MongoDB
- PM2
- Heroku
- Docker

## Database

```sh
# general
mongod

# linux
sudo service start mongodb

# macos
lunchy start mongo
```

## Running

run the app:

```sh
# development
npm run dev

# staging
npm run staging

# production
# set ENV for MongoDB first
npm start
```

The app runs by default on `localhost:3000`

