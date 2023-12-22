function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');


    const userMessage = userInput.value;
    chatBox.innerHTML += `<div class="user-message" style="font-family: 'Hanken Grotesk';">${userMessage}</div>`;
    userInput.value = "";

    setTimeout(() => {
        const botIcon = '<img class="bot-icon" src="src/img/robo.png" alt="ícone do chatbot"style="width: 25px; height: 25px; ">';
        const botMessage = `<div class="text-message">Hello! I'm ChatBot. How can I help you?</div>`;
        chatBox.innerHTML += `<div class="bot-message">${botIcon}<span>${botMessage}</span></div>`;
    }, 1000);
}

