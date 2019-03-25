# How I created this project step by step

# models

- Article
- Person

# Assocation

Person has many Articles

# SEQUELIZE SETUP

## Initiate an npm

```
npm init -y
```

## Install SEQUELIZE dependencies

```
npm install --save sequelize pg pg-hstore path
```

## Tell sequelize to create all the files inside db folder

```
mkdir db
touch .sequelizerc
```

## Edit .sequelizerc file

```
// .sequelizerc
const path = require('path');

module.exports = {
"config": path.resolve('./db/config', 'config.json'),
"models-path": path.resolve('./db/models'),
"seeders-path": path.resolve('./db/seeders'),
"migrations-path": path.resolve('./db/migrations'),
}
```

## Generate Sequelize files

```
sequelize init
```

## update db/config/config.json

```
{
"development": {
"username": <your username>,
"password": null,
"database": "blog",
"host": "127.0.0.1",
"dialect": "postgres",
"define": {
"underscored": true
}
},
...
}
```

## Generate the models

```
sequelize model:generate --name Person --attributes firstName:STRING,lastName:STRING,userName:STRING,password:STRING

sequelize model:generate --name Article --attributes title:STRING,content:TEXT
```

## Update the models that sequelize generated:

1. Change the table name to make it all lower case postgres naming conventions
2. Add the assocation
3. Update the migration file Change the table name to make it all lower case postgres naming conventions and add the assocation field then change the updatedAt to updated_at and createdAt to created_at

## create the database

```
createdb <DatabaseName>
```

## run the migration files

```
 sequelize db:migrate
```

## Generate the seeds

```
sequelize seed:generate --name people
sequelize seed:generate --name articles
```

## Run the seeds

```
 sequelize db:seed:all
```

# Express SETUP

## Install Express dependencies

```
npm install express babel-cli babel-preset-es2015 morgan --save
```

## Install Express dev dependencies

```
npm i nodemon --save-dev
```

## Config babel

```
touch .babelrc
```

```
{
  "presets": ["es2015"]
}
```

## update package.json

```js
"start": "node_modules/.bin/nodemon app.js --exec babel-node --",
```

## create app.js file

```
touch app.js
```

setteng up a server connected to the database

```js
import express from "express";
import models from "./db/models";
import bodyParser from "body-parser";
import logger from "morgan";

const app = express();
const port = 3000;

app.use(bodyParser.json());

models.sequelize.sync().then(() => {
  console.log("sync complete");

  app.listen(port, () =>
    console.log(`express-api app listening on port ${port}!`)
  );
});
```

# Adding routes

```
mkdir routes
touch routes/articles.routes.js
touch routes/people.routes.js
```

## update app.js

```js
// ...
import peopleRouter from "./routes/people.routes";
import articlesRouter from "./routes/articles.routes";
// ...

app.use(peopleRouter);
app.use(articlesRouter);
```

# Passport SETUP

```
mkdir lib
touch lib/passportOptions.js
touch lib/passportStartegy.js
```

## Install Passport dependencies

```
npm install passport jsonwebtoken passport-jwt  --save
```

## update app.js

```js
// ...
import passport from "passport";
import startegy from "./lib/passportStartegy";
// ...

// Define our auth startegy from before
passport.use(startegy);

/*** Middleware ***/

app.use(bodyParser.json());
// Only init after setting a startegy
app.use(passport.initialize());
// ...
```
