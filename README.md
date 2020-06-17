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

# ROTAS

Cada tabela tem as suas proprias rotas, mas para começar é necessario criar um usuário para conseguir um token por meio de um login.

Criar um Usuário:
```/api/v1/users``` via POST

Login:
```/api/v1/users/token``` via POST

### User

Listar Usuários:
```/api/v1/users``` via GET

Listar um Usuário específico com detalhes:
```/api/v1/users/{id}``` via GET

Alterar dados de um Usuário:
```/api/v1/users/{id}``` via PUT

Exluir um Usuário:
```/api/v1/users/{id}``` via DELETE

### Armamento

Listar Armamentos:
```/api/v1/armamentos``` via GET

Listar um Armamento específico com detalhes:
```/api/v1/armamentos/{id}``` via GET

Alterar dados de um Armamento:
```/api/v1/armamentos/{id}``` via PUT

Exluir um Armamento:
```/api/v1/armamentos/{id}``` via DELETE

### Classe

Listar Classes:
```/api/v1/classes``` via GET

Listar uma Classe específica com detalhes:
```/api/v1/classes/{id}``` via GET

Alterar dados de uma Classe:
```/api/v1/classes/{id}``` via PUT

Exluir uma Classe:
```/api/v1/classes/{id}``` via DELETE

### Foto

Listar Fotos:
```/api/v1/foto``` via GET

Listar uma Foto específica com detalhes:
```/api/v1/foto/{id}``` via GET

Alterar dados de uma Foto:
```/api/v1/foto/{id}``` via PUT

Exluir uma Foto:
```/api/v1/foto/{id}``` via DELETE

### Mapa

Listar Mapas:
```/api/v1/mapas``` via GET

Listar um Mapa específico com detalhes:
```/api/v1/mapas/{id}``` via GET

Alterar dados de um Mapa:
```/api/v1/mapas/{id}``` via PUT

Exluir um Mapa:
```/api/v1/mapas/{id}``` via DELETE

### Modo

Listar Modos:
```/api/v1/modos``` via GET

Listar um Modo específico com detalhes:
```/api/v1/modos/{id}``` via GET

Alterar dados de um Modo:
```/api/v1/modos/{id}``` via PUT

Exluir um Modo:
```/api/v1/modos/{id}``` via DELETE

### Mapa-Modo

Listar Mapa-Modos:
```/api/v1/mapa-modos``` via GET

Listar um Mapa-Modo específico com detalhes:
```/api/v1/mapa-modos/{id}``` via GET

Alterar dados de um Mapa-Modo:
```/api/v1/mapa-modos/{id}``` via PUT

Exluir um Mapa-Modo:
```/api/v1/mapa-modos/{id}``` via DELETE

### País

Listar Países:
```/api/v1/paises``` via GET

Listar um País específico com detalhes:
```/api/v1/paises/{id}``` via GET

Alterar dados de um País:
```/api/v1/paises/{id}``` via PUT

Exluir um País:
```/api/v1/paises/{id}``` via DELETE

### Personagem

Listar Personagens:
```/api/v1/personagens``` via GET

Listar um Personagem específico com detalhes:
```/api/v1/personagens/{id}``` via GET

Alterar dados de um Personagem:
```/api/v1/personagens/{id}``` via PUT

Exluir um Personagem:
```/api/v1/personagens/{id}``` via DELETE

### Seção

Listar Seções:
```/api/v1/secoes``` via GET

Listar uma Seção específica com detalhes:
```/api/v1/secoes/{id}``` via GET

Alterar dados de uma Seção:
```/api/v1/secoes/{id}``` via PUT

Exluir uma Seção:
```/api/v1/secoes/{id}``` via DELETE
