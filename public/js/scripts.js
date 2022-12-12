const socket = io('/chattings');   //<= 네임스페이스

const getElementById = (id) => document.getElementById(id) || null; // 코드 반복 제거하려고

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');


//* global socket handler
socket.on('user_connected', (username) => {
    drawNewChat(`${username} connected!`)
})
socket.on('new_chat', (data)=> {
    const {chat, username} = data
    drawNewChat(`${username}: ${chat}`)
})
socket.on('disconnect_user', (username) => drawNewChat(`${username} bye...`))

//* event calback fuctions
const handleSubmit = (event)=> {
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    if(inputValue !== ""){
        socket.emit('submit_chat', inputValue) //백엔드로 보내기
        //화면에다 그리기
        drawNewChat(`me: ${inputValue}`)
        event.target.elements[0].value = ""
    }
}

//* draw functions
const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `Hello ${username} Stranger :)`);

const drawNewChat = (message) => {
  const wrapperChatBox = document.createElement('div') //1. div만들고
  const chatBox = `
  <div>
    ${message}
  </div>
  `
  wrapperChatBox.innerHTML = chatBox //2. 만든 div에 chatBox넣음. 채팅칸 만들기 완성
  chattingBoxElement.append(wrapperChatBox) //3. 만든 채팅칸을 하위 dom요소로 계속 붙이는거
}  
  
function helloUser() {
    const username = prompt('What is your name?');
    socket.emit('new_user', username, (data) => {
        drawHelloStranger(data)
    });
}

function init() {
  helloUser();
  formElement.addEventListener('submit', handleSubmit);
}

init();