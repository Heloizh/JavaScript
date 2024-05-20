const cards = document.querySelectorAll(".card");
const scoreElement = document.getElementById("score");
const resetButton = document.getElementById("resetButton");

let matchedCard = 0; // Número de cartas que foram combinadas corretamente
let cardOne, cardTwo; // Variáveis para armazenar as duas cartas viradas atualmente
let disableDeck = false; // Flag para desabilitar temporariamente o clique nas cartas
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0; // Pontuação inicial, obtida do armazenamento local se disponível

function flipCard(e) {
    let clickedCard = e.target.closest(".card"); // Garante que o elemento clicado seja uma carta
    if (clickedCard !== cardOne && !disableDeck) { // Verifica se o clique não é na mesma carta virada ou se o deck não está desabilitado
        clickedCard.classList.add("flip"); // Adiciona a classe flip para virar a carta
        if (!cardOne) {
            return cardOne = clickedCard; // Se a primeira carta ainda não estiver definida, define-a
        }
        cardTwo = clickedCard; // Define a segunda carta
        disableDeck = true; // Desabilita temporariamente o deck para evitar cliques adicionais
        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src; // Obtém os URLs das imagens das duas cartas
        matchCards(cardOneImg, cardTwoImg); // Verifica se as cartas correspondem
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) { // Se as URLs das imagens forem iguais, as cartas correspondem
        matchedCard++; // Incrementa o contador de cartas correspondentes
        score += 10; // Incrementa a pontuação em 10 pontos por cada par correspondente
        updateScore(); // Atualiza a exibição da pontuação
        if (matchedCard == 8) { // Se todas as cartas foram combinadas corretamente
            setTimeout(() => {
                shuffleCard(); // Embaralha as cartas novamente após um curto intervalo
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard); // Remove os event listeners das cartas correspondentes
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; // Reseta as variáveis das cartas viradas
        disableDeck = false; // Reativa o deck para permitir novos cliques
    } else { // Se as cartas não corresponderem
        setTimeout(() => {
            cardOne.classList.add("shake"); // Adiciona classe para animação de "tremer" nas cartas
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip"); // Remove a classe de "tremer" e desvira as cartas
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = ""; // Reseta as variáveis das cartas viradas
            disableDeck = false; // Reativa o deck para permitir novos cliques
        }, 1200);
    }
}

function shuffleCard() {
    matchedCard = 0; // Reseta o contador de cartas correspondentes
    cardOne = cardTwo = ""; // Reseta as variáveis das cartas viradas
    disableDeck = false; // Garante que o deck não esteja desabilitado ao embaralhar as cartas
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]; // Array com pares de números representando as imagens
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); // Embaralha o array

    cards.forEach((card, index) => {
        card.classList.remove("flip"); // Remove a classe flip de todas as cartas
        let imgTag = card.querySelector("img"); // Obtém a tag de imagem dentro da carta
        imgTag.src = `images/img-${arr[index]}.png`; // Define o URL da imagem com base no array embaralhado
        card.addEventListener("click", flipCard); // Adiciona um event listener de clique a cada carta
    });
}

function updateScore() {
    scoreElement.textContent = score; // Atualiza o elemento de pontuação na interface do usuário
    localStorage.setItem('score', score); // Salva a pontuação no armazenamento local para persistência
}

function resetGame() {
    score = 0; // Reseta a pontuação
    updateScore(); // Atualiza a exibição da pontuação
    shuffleCard(); // Embaralha as cartas para começar um novo jogo
}

resetButton.addEventListener("click", resetGame); // Adiciona um event listener ao botão de reiniciar jogo

updateScore(); // Atualiza a exibição inicial da pontuação
shuffleCard(); // Embaralha as cartas quando a página é carregada

cards.forEach(card => {
    card.addEventListener("click", flipCard); // Adiciona um event listener de clique a cada carta
});
