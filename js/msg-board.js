var postMsgBtn = document.getElementById('msg-board-btn');
var msgInputField = document.getElementById('msg-input-field');
var msgContainer = document.getElementById('messages-section');

postMsgBtn.addEventListener('click', function(){
    event.preventDefault();

    var newMsgElement = document.createElement('p');
    newMsgElement.innerHTML = msgInputField.value;
    newMsgElement.style.color = 'black';
    newMsgElement.style.marginBottom = '0px';
    newMsgElement.style.marginTop = '0px';

    newMsgElement.addEventListener('click', function(){
        this.remove();
    });

    msgContainer.appendChild(newMsgElement);
});