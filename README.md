# Docker-unittesting-livraison

1--Créer un network, et lui donner le nom de livraison-marhaba-net----------------------------------

docker network create livraison-marhaba-net.


2--Executez un container basé sur l'image mongo

docker container run -d --namelivraison-marhaba-db -v livraison-marhaba-db:/data/db --network livraison-marhaba-net mongo

​
4--Créer une image et nommée livraison-marhaba-docker:test

docker build -t livraison-marhaba-docker:test


5--Exécutez un container basé sur cette image 

docker container run -d --name hotel-booking -v ${pwd}:/app -v /app/node_modules --network hotel-booking-net -p 80:80 hotel-booking-docker:test
