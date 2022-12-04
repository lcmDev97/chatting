cd /home/ubuntu/chattingApp

sudo docker build -t chatting-image .

sudo docker run -d -p 3001:80 --name chatting-container chatting-image