cd /home/ubuntu

sudo docker pull changmin97/chatting-image:latest

sudo docker run -d --rm -p 3001:80 --name chatting-container changmin97/chatting-image:latest