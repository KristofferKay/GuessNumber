const lblMessage = document.querySelector(".message");
console.log(lblMessage);

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

const inpGuess = document.querySelector(".guess");
console.log(inpGuess);

const pbAgain = document.querySelector(".again");
console.log(pbAgain);

const pbGuess = document.querySelector(".check");
const highScoreDoc = document.querySelector(".highscore");
console.log(highScoreDoc);

let highScore = 0;
let score = 20;
let randomNumber = 0;

function generatedNumber() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  lblNumber.textContent = randomNumber;
  console.log(randomNumber);
  score = 20;
  lblScore.textContent = score;
}

pbAgain.addEventListener("click", generatedNumber);

function guessNumber() {
  let clientGuess = inpGuess.value;
  if (clientGuess == randomNumber) {
    lblMessage.textContent = "du har vundet";
    lblNumber.textContent = randomNumber;
    if (score > highScore) {
      highScore++;
      highScoreDoc.textContent = highScore;
    }
  } else {
    lblMessage.textContent =
      clientGuess > randomNumber ? "For højt" : "For lavt";
    score--;
    lblScore.textContent = score;
    if (score <= 0) {
      lblMessage.textContent = "Du har tabt prøv igen";
      lblScore.textContent = score;
    }

    console.log("try again");
  }
}

pbGuess.addEventListener("click", guessNumber);
