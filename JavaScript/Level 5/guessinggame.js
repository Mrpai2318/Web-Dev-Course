let max = parseInt(prompt("Enter the maximum number for the guessing game: "));
let winningNum = Math.floor(Math.random() * max) + 1;
let guess;

do {
    guess = parseInt(prompt("Enter your guess or enter -1 to quit: "));
    if (guess < winningNum) {
        alert("Too low! Try again.");
    } else if (guess > winningNum) {
        alert("Too high! Try again.");
    } else if (guess === -1) {
        break;
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
} while (guess !== winningNum);
    
alert(`Congratulations! You have guessed the correct number ${winningNum}.`);