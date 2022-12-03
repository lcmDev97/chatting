DOCKER_IMAGE_NAME=chatting-image

DOCKER_CONTAINER_NAME=chatting-container

docker build -t ${DOCKER_IMAGE_NAME} .

docker run -d -p 3001:80 --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE_NAME}