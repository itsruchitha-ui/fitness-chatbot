function sendMessage(){
let input=document.getElementById('userInput');
let chatBox=document.getElementById('chatBox');
let userText=input.value;
if(userText.trim()==='') return;
chatBox.innerHTML+=`<div class="user-message">${userText}</div>`;
let botReply='I can help with fitness and meal planning.';
setTimeout(()=>{
chatBox.innerHTML+=`<div class="bot-message">${botReply}</div>`;
},500);
input.value='';
}