RabbitMQ Docker Image Terminal Command

docker pull rabbitmq:3.13.3

docker run --rm -it -p 5672:5672 rabbitmq:3.13.3

---
Zipkin Docker Image Terminal Command

docker run --rm -it --name zipkin -p 9411:9411 openzipkin/zipkin