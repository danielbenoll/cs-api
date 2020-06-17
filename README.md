# COUNTER STRIKE: Global Offensive 🔫 API

Este projeto vem pre-configurado com.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations e seeds

## Setup

Logo depois que der um git clone, rode este comando: `npm install`. Para criar a pasta ´node_modules´ .


### Migrations

Para executar os Migrations.

```js
adonis migration:run
```

Para executar os Migrations com as Seeders.

```js
adonis migration:run --seed
```

## Iniciar o servidor

Digite o comando: `adonis serve --dev`

## Observação

O arquivo ´.env´ é necessario para que o programa inicie, caso não for criado automaticamente utilize este exemplo:

```
  HOST=127.0.0.1
  PORT=3333
  NODE_ENV=development

  APP_NAME=AdonisJs
  APP_URL=http://${HOST}:${PORT}

  CACHE_VIEWS=false

  APP_KEY=

  DB_CONNECTION=sqlite
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_USER=root
  DB_PASSWORD=
  DB_DATABASE=adonis

  HASH_DRIVER=bcrypt

```

E o modifique.

# COMANDOS
