## Description

Test pour Innovorder, voir plus de détail ici : https://github.com/InnovOrder/software-technical-tests/tree/master/crud-nestjs

## Variables d'environnement

Mettre dans un `.env` à la racine du projet

`
NODE_ENV= development or production
DB_PORT= port db
DB_HOST= host db
DB_USERNAME= username db
DB_PASSWORD= password db
DB_NAME= name db
JWT_SECRET= secret for jwt
PASSWORD_SALT= salt ex : 10
`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

Pour lancer les tests unitaire de l'OpenFoodStack service :

```bash
# unit tests
$ npm run test

```

## Routing

(dev)

Inscription d'un utilisateur via login / password 
Post to http://localhost:3000/api/user
with body 
`
{
    "login": "something",
    "password": "something",
    "firstName": "something",
    "lastName": "something"
}
`

Authentification d'un utilisateur via login / password
Post to http://localhost:3000/api/auth/login
with body 
`
{
    "username": "tutu",
    "password": "toto"
}
`
Will return if match
`
{
  "access_token" : "something"
}
`

Recherche d'un produit par son code barre sur l'API de OpenFoodFacts
Get to http://localhost:3000/api/openFoodStack/[code barre]
with Authorization header : "Bearer [access_token]"
Will return a object of product if exist

Mise à jour de l'utilisateur
with Authorization header : "Bearer [access_token]"
Put to http://localhost:3000/api/user/login
with body 
`
{
    "login": "something"
}
`
Put to http://localhost:3000/api/user/firstName
with body 
`
{
    "firstName": "something"
}
`
Put to http://localhost:3000/api/user/lastName
with body 
`
{
    "lastName": "something"
}
`
