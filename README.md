# _EXPRESSJS

### Creating the image, container and running the locally's application 
```bash
$ docker compose -f docker-compose.yml --env-file .env up
```

### Creating the image and push in docker hub the development's application
```bash
$ docker build --target development -t 3481974/app-development:app-development .
$ docker push docker.io/3481974/app-development:app-development
```