DOCKER_IMAGE_NAME=changmin97/chatting-image

DOCKER_CONTAINER_NAME=chattingApp

docker build -t changmin97/chatting-image ../ # <--  Dockerfile 상대 경로 지정.

docker run -d -p 80:80 --name chattingApp changmin97/chatting-image