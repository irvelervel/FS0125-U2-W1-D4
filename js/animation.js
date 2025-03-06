// qui dentro dobbiamo rispolverare il nostro JS
// e selezionare dal DOM il bottone "START" e collegarlo ad una funzione
// questa funzione aggiungera/toglierà la classe "animate" dall'elemento "ex-5"

// seleziono lo start button
const startButton = document.getElementById('start-button')
startButton.addEventListener('click', function () {
  // ora dobbiamo selezionare l'elemento "ex-5"
  const box = document.querySelector('.ex-5') // il primo (e unico) elemento con class="ex-5"
  box.classList.add('animate')
  if (startButton.innerText === 'START') {
    startButton.innerText = 'STOP'
    box.style.animationPlayState = 'running'
  } else {
    startButton.innerText = 'START'
    // freeziamo l'animazione
    box.style.animationPlayState = 'paused'
  }
})
