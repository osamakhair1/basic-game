let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('result').textContent = `🎉 Correct! You guessed the number in ${attempts} attempts.`;
        document.getElementById('guessButton').disabled = true;
    } else if (userGuess > randomNumber) {
        document.getElementById('result').textContent = '📈 Too high! Try again.';
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = '📉 Too low! Try again.';
    } else {
        document.getElementById('result').textContent = '❗ Please enter a valid number.';
    }

    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
});
