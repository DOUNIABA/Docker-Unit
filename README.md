# Docker-unittesting-livraison
## Part Backend
-----------------------------------------
### Create a Docker File 
```Python
FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node","index.js"]
```

### Création d'un network

```Bash
docker network create livraison-marhaba-net
```

### Executez un db_container basé sur l'image mongo:
```Bash
docker container run -d --name livraison-marhaba-db -v livraison-marhaba-db:/data/db --network livraison-marhaba-net mongo 
```

### Création d'une image nommée livraison-marhaba-docker:test
```Bash
docker build -t livraison-marhaba-docker:test .
```

### Exécutez un container basé sur l'image de backend
```Bash
docker container run -d --name livraison-marhaba -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 4000:4000 livraison-marhaba-docker:test
```

## Part Frontend
----------------------------------------------------
### Create a Docker File

```Python
FROM node:16

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
```

### Créer une image et nommée livraison-marhaba-docker:test
```Bash
docker build -t front-livraison-marhaba-docker:test .
```

### Exécutez un container basé sur cette image 
```Bash
docker container run -d --name front-livraison-marhaba -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 3000:3000
front-livraison-marhaba-docker:test
```
