# Super Server API Node

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg?style=flat-square)](https://github.com/ndelvalle/generator-api)
[![generator-rest](https://img.shields.io/badge/built%20with-generator--rest-green.svg?style=flat-square)](https://github.com/ndelvalle/generator-rest)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

Super server RESTful API with:

- Node.js 6+
- Express
- MongoDB
- PM2
- Heroku
- Docker

--------------------------------------------------------------------------------

## Running Commands

```sh
npm start # default run
npm test # test using AVA
npm run test:unit # run unit tests
npm run test:integration # run integration tests
npm run coverage # open the last test coverage report on the browser
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run build # build the project into dist/ folder
npm run docs # generate API docs
```

The app runs by default on `localhost:3000`

--------------------------------------------------------------------------------

## Setups

### Database

```sh
# general
mongod
# linux
sudo service start mongodb
# macos
lunchy start mongo
```

--------------------------------------------------------------------------------

## API Endpoint Pattern

| Route      | HTTP   | Description
|------------|--------|-------------
| /users     | GET    | Get all the users
| /users     | POST   | Create a user
| /users/:id | GET    | Get a single user
| /users/:id | PUT    | Update a user with new info
| /users/:id | DELETE | Delete a user

--------------------------------------------------------------------------------

## Playing Locally

**Run the server in development mode**

```sh
$ npm run dev
```

If you choose to generate the authentication API, you can start to play with it.

> Note that creating and authenticating users needs a master key (which is defined in the `.env` file)

**Create a user (sign up):**

```sh
curl -X POST http://0.0.0.0:9000/users -d "email=admin@example.com&password=123456&access_token=MASTER_KEY_HERE"
```

It will return something like:

```sh
{
  "id": "57d8160eabfa186c7887a8d3",
  "name": "test",
  "picture":"https://gravatar.com/avatar/55502f40dc8b7c769880b10874abc9d0?d=identicon",
  "email": "admin@example.com",
  "createdAt": "2016-09-13T15:06:54.633Z"
}
```

**Authenticate the user (sign in):**

```sh
curl -X POST http://0.0.0.0:9000/auth -u admin@example.com:123456 -d "access_token=MASTER_KEY_HERE"
```

It will return something like:

```sh
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "user": {
    "id": "57d8160eabfa186c7887a8d3",
    "name": "test",
    "picture": "https://gravatar.com/avatar/55502f40dc8b7c769880b10874abc9d0?d=identicon",
    "email": "admin@example.com",
    "createdAt":"2016-09-13T15:06:54.633Z"
  }
}
```

Now you can use the `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9` token (it's usually greater than this) to call user protected APIs. For example, you can create a new `article` API using `yo rest:api` and make the `POST /articles` endpoint only accessible to authenticated users. Then, to create a new article you must pass the `access_token` parameter.

```sh
curl -X POST http://0.0.0.0:9000/articles -d "title=Awesome&content=Yeah&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
```

It will return something like:

```sh
{
  "id": "57d819bfabfa186c7887a8d6",
  "title": "Awesome",
  "content": "Yeah",
  "createdAt": "2016-09-13T15:22:39.846Z",
  "updatedAt":"2016-09-13T15:22:39.846Z"
}
```

> Some endpoints are only accessible by admin users. To create an admin user, just pass the `role=admin` along to other data when calling `POST /users`.

--------------------------------------------------------------------------------

## Deploy

You can easily build your project by executing `npm run build`. It will put the build files in `./dist` so you can deploy its content anywhere.

Here is an example on how to deploy to [Heroku](https://heroku.com) using [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line):
```sh
# build files and change directory to ./dist
npm run build
cd dist

# start a new local git repository inside there
git init

# create a new heroku app
heroku apps:create super-app

# add heroku remote reference to the local repository
heroku git:remote --app super-app

# add the MongoLab addon to the heroku app
heroku addons:create mongolab

# set the environment variables to the heroku app (see the .env file in root directory)
heroku config:set MASTER_KEY=SUPERMASTER JWT_SECRET=SUPERSECRET

# commit and push the build files
git add -A
git commit -m "SUPER COMMIT"
git push heroku master

# open the deployed app in the browser
heroku open
```

The second time you deploy, you just need to:

```sh
npm run build
cd dist
git add -A
git commit -m "SUPER COMMIT"
git push heroku master
heroku open
```

--------------------------------------------------------------------------------

## Directory structure

### ./api/

Here is where the API endpoints are defined. Each API has its own folder.

#### ./api/entity/entity.model.js

It defines the Mongoose schema and model for the API endpoint. Any changes to the data model should be done here.

#### ./api/entity/entity.controller.js

This is the API controller file. It defines the main router middlewares which use the API model.

#### ./api/entity/entity.router.js

This is the entry file of the API. It defines the routes using, along other middlewares (like session, validation etc.), the middlewares defined in the `entity.controller.js` file.

### services/

Here you can put `helpers`, `libraries` and other types of modules which you want to use in your APIs.
