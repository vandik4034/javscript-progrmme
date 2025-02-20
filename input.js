// Declare variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessInput = document.getElementById('guess');
let submitButton = document.getElementById('submitGuess');
let messageDiv = document.getElementById('message');
let attemptsDiv = document.getElementById('attempts');
let restartButton = document.getElementById('restart');

// Function to handle guess submission
submitButton.addEventListener('click', function() {
    let userGuess = parseInt(guessInput.value);
    
    attempts++;
    
    if (userGuess < 1 || userGuess > 100) {
        messageDiv.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (userGuess === randomNumber) {
        messageDiv.textContent = "Congratulations! You guessed the number!";
        messageDiv.style.color = "green";
        attemptsDiv.textContent = `Total attempts: ${attempts}`;
        restartButton.style.display = "inline-block";
    } else if (userGuess < randomNumber) {
        messageDiv.textContent = "Too low! Try again.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Too high! Try again.";
        messageDiv.style.color = "red";
    }

    attemptsDiv.textContent = `Attempts: ${attempts}`;
});

// Function to restart the game
restartButton.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    messageDiv.textContent = '';
    attemptsDiv.textContent = 'Attempts: 0';
    restartButton.style.display = 'none';
});
