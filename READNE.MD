## Docker Image 만들기

```shell

docker image build --build-arg API_SERVER_IP=localhost --build-arg API_SERVER_PORT=5000 --no-cache -t testimg .

docker container run -d -p 3000:3000 testimg

```