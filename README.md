# COUNTER STRIKE: Global Offensive 🔫 API

<<<<<<< HEAD
=======
Esse projeto foi criado no intuito de fazer uma API para um projeto da faculdade. Estou disponibilizando gratuitamente para vins estudantis.

>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035
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

<<<<<<< HEAD
Criar um Usuário:
=======
-Criar um Usuário:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/users``` 
via POST


<<<<<<< HEAD
Login:
=======
-Login:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/users/token``` 
via POST

### User

<<<<<<< HEAD
Listar Usuários:
=======
-Listar Usuários:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/users``` 
via GET


<<<<<<< HEAD
Listar um Usuário específico com detalhes:
=======
-Listar um Usuário específico com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/users/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de um Usuário:
=======
-Alterar dados de um Usuário:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/users/{id}``` 
via PUT


<<<<<<< HEAD
Exluir um Usuário:
=======
-Exluir um Usuário:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/users/{id}``` 
via DELETE


### Armamento

<<<<<<< HEAD
Listar Armamentos:
=======
-Listar Armamentos:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/armamentos``` 
via GET


<<<<<<< HEAD
Listar um Armamento específico com detalhes:
=======
-Listar um Armamento específico com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/armamentos/{id}```
via GET


<<<<<<< HEAD
Alterar dados de um Armamento:
=======
-Alterar dados de um Armamento:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/armamentos/{id}```
via PUT


<<<<<<< HEAD
Exluir um Armamento:
=======
-Exluir um Armamento:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/armamentos/{id}``` 
via DELETE


### Classe

<<<<<<< HEAD
Listar Classes:
=======
-Listar Classes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/classes``` 
via GET


<<<<<<< HEAD
Listar uma Classe específica com detalhes:
=======
-Listar uma Classe específica com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/classes/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de uma Classe:
=======
-Alterar dados de uma Classe:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/classes/{id}``` 
via PUT


<<<<<<< HEAD
Exluir uma Classe:
=======
-Exluir uma Classe:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/classes/{id}``` 
via DELETE


### Foto

<<<<<<< HEAD
Listar Fotos:
=======
-Listar Fotos:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/foto``` 
via GET


<<<<<<< HEAD
Listar uma Foto específica com detalhes:
=======
-Listar uma Foto específica com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/foto/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de uma Foto:
=======
-Alterar dados de uma Foto:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/foto/{id}``` 
via PUT


<<<<<<< HEAD
Exluir uma Foto:
=======
-Exluir uma Foto:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/foto/{id}``` 
via DELETE


### Mapa

<<<<<<< HEAD
Listar Mapas:
=======
-Listar Mapas:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapas``` 
via GET


<<<<<<< HEAD
Listar um Mapa específico com detalhes:
=======
-Listar um Mapa específico com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapas/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de um Mapa:
=======
-Alterar dados de um Mapa:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapas/{id}``` 
via PUT


<<<<<<< HEAD
Exluir um Mapa:
=======
-Exluir um Mapa:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapas/{id}``` 
via DELETE


### Modo

<<<<<<< HEAD
Listar Modos:
=======
-Listar Modos:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/modos``` 
via GET


<<<<<<< HEAD
Listar um Modo específico com detalhes:
=======
-Listar um Modo específico com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/modos/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de um Modo:
=======
-Alterar dados de um Modo:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/modos/{id}```
via PUT


<<<<<<< HEAD
Exluir um Modo:
=======
-Exluir um Modo:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/modos/{id}``` 
via DELETE


### Mapa-Modo

<<<<<<< HEAD
Listar Mapa-Modos:
=======
-Listar Mapa-Modos:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapa-modos``` 
via GET


<<<<<<< HEAD
Listar um Mapa-Modo específico com detalhes:
=======
-Listar um Mapa-Modo específico com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapa-modos/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de um Mapa-Modo:
=======
-Alterar dados de um Mapa-Modo:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapa-modos/{id}``` 
via PUT


<<<<<<< HEAD
Exluir um Mapa-Modo:
=======
-Exluir um Mapa-Modo:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/mapa-modos/{id}``` 
via DELETE


### País

<<<<<<< HEAD
Listar Países:
=======
-Listar Países:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/paises``` 
via GET


<<<<<<< HEAD
Listar um País específico com detalhes:
=======
-Listar um País específico com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/paises/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de um País:
=======
-Alterar dados de um País:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/paises/{id}``` 
via PUT


<<<<<<< HEAD
Exluir um País:
=======
-Exluir um País:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/paises/{id}``` 
via DELETE


### Personagem

<<<<<<< HEAD
Listar Personagens:
=======
-Listar Personagens:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/personagens``` 
via GET


<<<<<<< HEAD
Listar um Personagem específico com detalhes:
=======
-Listar um Personagem específico com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/personagens/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de um Personagem:
=======
-Alterar dados de um Personagem:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/personagens/{id}``` 
via PUT


<<<<<<< HEAD
Exluir um Personagem:
=======
-Exluir um Personagem:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/personagens/{id}``` 
via DELETE


### Seção

<<<<<<< HEAD
Listar Seções:
=======
-Listar Seções:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/secoes``` 
via GET


<<<<<<< HEAD
Listar uma Seção específica com detalhes:
=======
-Listar uma Seção específica com detalhes:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/secoes/{id}``` 
via GET


<<<<<<< HEAD
Alterar dados de uma Seção:
=======
-Alterar dados de uma Seção:
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035

```/api/v1/secoes/{id}``` 
via PUT


<<<<<<< HEAD
Exluir uma Seção:

```/api/v1/secoes/{id}``` 
via DELETE
=======
-Exluir uma Seção:

```/api/v1/secoes/{id}``` 
via DELETE
>>>>>>> c5c76d320c506f0edc054d7da74b15866460c035
