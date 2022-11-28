# Docker-unittesting-livraison
## Part Backend
-----------------------------------------
### Create a Docker File 

FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node","index.js"]


### Création d'un network

```Bash
docker network create livraison-marhaba-net
```


### Executez un container basé sur l'image mongo:

docker container run -d --name livraison-marhaba-db -v livraison-marhaba-db:/data/db --network livraison-marhaba-net mongo

​
### Création  d'une image nommée livraison-marhaba-docker:test

docker build -t livraison-marhaba-docker:test

### Exécutez un container basé sur cette image 

docker container run -d --name hotel-booking -v ${pwd}:/app -v /app/node_modules --network hotel-booking-net -p 80:80 hotel-booking-docker:test


## Part Frontend
----------------------------------------------------
### Create a Docker File
FROM node:16

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]

### Créer une image et nommée livraison-marhaba-docker:test

docker build -t livraison-marhaba-docker:test


### Exécutez un container basé sur cette image 

docker container run -d --name hotel-booking -v ${pwd}:/app -v /app/node_modules --network hotel-booking-net -p 80:80 hotel-booking-docker:test
