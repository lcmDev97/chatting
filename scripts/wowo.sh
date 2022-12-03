docker build -t changmin97/chatting-image ../ # <-- 여기서 Dockerfile의 경로를 제대로 지정해주어야합니다.

docker run -d -p 80:80 --name chattingApp changmin97/chatting-image