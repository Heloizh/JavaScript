
document.addEventListener('DOMContentLoaded', () => {
  //CÓDIGO DA NAVE
  //Seleciona elementos do DOM 
  const nave = document.getElementById('nave');
  const fire_nave = document.getElementById('fire-nave');
  const shots = document.getElementById('shots');

  const wrapper = document.querySelector('.wrapper');
  const steps = 20; //Passos em pixels para mover a nave

  //Inicializa as posições horizontais da nave e dos tiros
  let leftPositionNave = (wrapper.clientWidth - nave.offsetWidth) / 2;
  let leftPositionFire = (wrapper.clientWidth - fire_nave.offsetWidth) / 2;
  let isSpacePressed = false; //Flag para verificar se a tecla space está pressionada
  let isShotsAtLimit = false; //Flag para verificar se os tiros atingiram o limite do contêiner

  // Definindo a posição inicial em pixels
  nave.style.left = `${leftPositionNave}px`;
  fire_nave.style.left = `${leftPositionFire}px`;

  // Definindo as funcionalidades do teclado ao pressionar as teclas de seta
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      leftPositionNave += steps;
      leftPositionFire += steps;
    } else if (e.key === 'ArrowLeft') {
      leftPositionNave -= steps;
      leftPositionFire -= steps;
    }

    // Limita a posição do elemento em relação ao container
    leftPositionNave = Math.max(-30, Math.min(leftPositionNave, wrapper.clientWidth - nave.offsetWidth + 30));
    leftPositionFire = Math.max(-30, Math.min(leftPositionFire, wrapper.clientWidth - fire_nave.offsetWidth + 30));

    // Atualiza a posição da nave em pixels
    nave.style.left = `${leftPositionNave}px`;
    fire_nave.style.left = `${leftPositionFire}px`;
  });

  // Adiciona efeito dos tiros ao pressionar espaço
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && leftPositionNave >= -30 && leftPositionNave <= (wrapper.clientWidth - nave.offsetWidth + 30) ) {
      isSpacePressed = true;
      isShotsAtLimit = false; // Reseta o flag de limite
        

      // Update continuo da posição dos tiros enquanto o espaço está pressionado
      const updateShotsPosition = () => {
        if (isSpacePressed) {
          const shotsPosition = calculateShotsPosition();

          // Update da posição dos tiros se não atingiu o limite
          if (!isShotsAtLimit) {
            shots.style.left = `${shotsPosition}px`;
          }

          requestAnimationFrame(updateShotsPosition);
        }
      };

      shots.style.display = 'block';
      requestAnimationFrame(updateShotsPosition);
    }
  });

  // Remove os tiros quando a barra de espaço é solta
  document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      isSpacePressed = false;
      shots.style.display = 'none';
    }
  });

  // Função para calcular a posição dos tiros   
  function calculateShotsPosition() {
    const adjustedShotsPosition = Math.max(-8, Math.min(leftPositionNave + (fire_nave.offsetWidth / 2) - (shots.offsetWidth / 2.15)));


    return adjustedShotsPosition;
  }    
    
});


