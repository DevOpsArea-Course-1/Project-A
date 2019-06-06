### this project to show how docker-compose.yml file could creaet more that one project 


- NodeJS App 1 
- NodeJS App 2
- Nginx as reverse proxy between the 2 Apps 



#### build the nginx reverse proxy image  

``docker build -t reverse-proxy  reverse-proxy``

#### will create an images called reverse-proxy

``docker-compose up -d ``

#### Now if you go to http://127.0.0.1/bbc --> bbc website

#### Now if you go to http://127.0.0.1/app1 --> go to App1

#### Now if you go to http://127.0.0.1/app2 --> go to App2


#### You could see the App1 directly throw 

```127.0.0.1:7766```

#### You could see the App2 directly throw 

```127.0.0.1:8866```

![blank diagram 1](https://user-images.githubusercontent.com/20526165/45691992-04fde900-bb5a-11e8-88d8-1dd49cde1677.png)
