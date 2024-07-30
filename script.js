
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 4;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

guessButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "pardon entrer un nombre valide entre 1 et 100.";
        return;
    }

    guessesLeft--;

    if (guess === randomNumber) {
        message.textContent = `felicitation vous aviez gagnez  apres ${4 - guessesLeft} essai.`;
        guessButton.disabled = true; // Disable button after winning
    } else if (guess < randomNumber) {
        message.textContent =`trop bas encore ${guessesLeft} essaie.`;
    } else {
        message.textContent = `trop haut encore ${guessesLeft} essaie.`;
    }
    if(guessesLeft===0 && guess===randomNumber){
        message.textContent = `felicitation vous aviez gagnez  apres ${4 - guessesLeft} essai.`;
        guessButton.disabled = true; // Disable button after winning
    }
    if (guessesLeft === 0 && guess!==randomNumber) {
        message.textContent = `vous aviez perdu il falait entrer ${randomNumber} appuyer F5 pour continuer.`;
        guessButton.disabled = true; // Disable button after losing
    }
});