### nginx
```
docker run -d -p 80:80 -v /Users/cq/Documents/github/docker-file/nginx:/app -v /Users/cq/Documents/github/docker-file/nginx/conf.d:/etc/nginx/conf.d  nginx
```

### node
```
node cq$ > docker build -t hello .
node cq$ > docker run -d -p 4000:8888 hello
```

### mysql
```
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /Users/cq/Documents/github/docker-file/mysql/data:/var/lib/mysql mysql
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```