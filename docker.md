```
docker build -t friendlyname .  # Create image using this directory's Dockerfile
docker run -p 4000:80 friendlyname  # Run "friendlyname" mapping port 4000 to 80
docker run -d -p 4000:80 friendlyname         # Same thing, but in detached mode
docker container ls                                # List all running containers
docker container ls -a             # List all containers, even those not running
docker container stop <hash>           # Gracefully stop the specified container
docker container kill <hash>         # Force shutdown of the specified container
docker container rm <hash>        # Remove specified container from this machine
docker container rm $(docker container ls -a -q)         # Remove all containers
docker image ls -a                             # List all images on this machine
docker image rm <image id>            # Remove specified image from this machine
docker image rm $(docker image ls -a -q)   # Remove all images from this machine
docker login             # Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag  # Tag <image> for upload to registry
docker push username/repository:tag            # Upload tagged image to registry
docker run username/repository:tag                   # Run image from a registry
docker --help
docker exec --help
docker search <image>
```

### 启动容器
```
docker ps -a
docker start <container_id>
docker stop <container_id>
```

### docker compose
```
docker-compose -h
docker-compose up -d
```

### 重启 nginx
```
docker exec nginx nginx -s reload
```

### inspect 目录映射
```
docker run -d -p 80:80 -v /Users/cq/Documents/github/docker-file/nginx:/app -v /Users/cq/Documents/github/docker-file/nginx/conf.d:/etc/nginx/conf.d  nginx
docker run -d -p 80:80 -v /Users/cq/Documents/github/docker-file/nginx:/app nginx
docker inspect <container_id>
```

### 进入容器bash
```
docker exec -ti <container_id> /bin/bash
apt-get update
apt-get install vim
exit
```

### 日志
```
docker logs <container_id>
```

### 导出容器
```
docker export <container_id>
```

- [https://hub.docker.com/_/php](https://hub.docker.com/_/php)
