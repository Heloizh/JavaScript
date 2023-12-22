function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    const userMessage = userInput.value;
    chatBox.innerHTML += `<div>User: ${userMessage}</div>`;
    userInput.value = "";
    setTimeout(() => {
        const botMessage = 'Olá! Sou o chatbot. Como posso ajudar?';
        chatBox.innerHTML += `<div>Bot: ${botMessage}</div>`;
    }, 1000);
}