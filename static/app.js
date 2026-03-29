function sendMessage() {
    const inputField = document.querySelector('.chatbox__footer input');
    const chatMessageContainer = document.querySelector('.chatbox__messages');
    const userText = inputField.value.trim();

    if (userText === "") return;

  
    let userHtml = '<div class="messages__item messages__item--visitor">' + userText + '</div>';
    chatMessageContainer.insertAdjacentHTML('afterbegin', userHtml);
    inputField.value = '';

    
    fetch('/predict', {
        method: 'POST',
        body: JSON.stringify({ message: userText }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
      
        let botHtml = '<div class="messages__item messages__item--operator">' + data.answer + '</div>';
        chatMessageContainer.insertAdjacentHTML('afterbegin', botHtml);
    })
    .catch((error) => {
        console.error('Error:', error);
        let errorHtml = '<div class="messages__item messages__item--operator">Sorry, server se baat nahi ho payi.</div>';
        chatMessageContainer.insertAdjacentHTML('afterbegin', errorHtml);
    });
}


document.querySelector('.chatbox__send--footer').addEventListener('click', () => {
    sendMessage();
});

document.querySelector('.chatbox__footer input').addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});