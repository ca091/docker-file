### nginx
```
docker run -d -p 80:80 -p 443:443 -v /Users/cq/Documents/github/docker-file/nginx:/app -v /Users/cq/Documents/github/docker-file/nginx/conf.d:/etc/nginx/conf.d  nginx
```

### node
```
node cq$ > docker build -t hello .
node cq$ > docker run -d -p 4000:8888 hello
```

### php
```
$ docker build -t v-site .
$ docker run -it --rm --name v-official-website v-site
```

### mysql
```
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /Users/cq/Documents/github/docker-file/mysql/data:/var/lib/mysql mysql
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

### redis
```
docker run -d -p 6380:6379 redis
```

### tomcat
```
docker run -d -p 8081:8080 -v /Users/cq/Documents/github/docker-file/tomcat/webapps/www:/usr/local/tomcat/webapps/www tomcat:8
```

### maven
```
docker run -it --rm -v "$PWD":/usr/src/mymaven -w /usr/src/mymaven maven mvn clean install
docker run -it --rm -v /Users/cq/Documents/idea/test1:/usr/src/mymaven -w /usr/src/mymaven maven mvn clean install
```

### https 证书生成
```
openssl req -days 3650 -x509 -sha256 -nodes -newkey rsa:2048 -keyout feiyu.key -out feiyu.crt
```
