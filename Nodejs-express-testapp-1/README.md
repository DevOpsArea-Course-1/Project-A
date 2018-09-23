
#clone the repo

docker build -t test1 .

docker run -d  -p 7777:7777 test1
