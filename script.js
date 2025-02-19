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
let highScore = highScoreDoc.innerHTML;
console.log(highScore);

let randomNumber = 0;
let score = lblScore.innerHTML - 1;

function generatedNumber() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  lblNumber.textContent = randomNumber;
  console.log(randomNumber);
  if (score > highScore) {
    highScore = score;
  }
}

pbAgain.addEventListener("click", generatedNumber);

function guessNumber() {
  let clientGuess = inpGuess.value;
  let score = lblScore.innerHTML - 1;
  console.log(clientGuess);

  if (clientGuess == randomNumber) {
    lblMessage.textContent = "du har vundet";
    lblNumber.textContent = randomNumber;
  } else {
    lblMessage.textContent = "prøv igen";
    if (score < 0) {
      lblMessage.textContent =
        "Du har prøvet for mange gange, din score er nu på 0";
      score = 0;
    } else lblScore.textContent = score;

    console.log("try again");
  }
}

pbGuess.addEventListener("click", guessNumber);
