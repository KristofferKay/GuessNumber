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

let randomNumber = 0;

function generatedNumber() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  lblNumber.textContent = randomNumber;
  console.log(randomNumber);
}

pbAgain.addEventListener("click", generatedNumber);

function guessNumber() {
  const clientGuess = inpGuess.value;
  console.log(clientGuess);

  if (clientGuess == randomNumber) {
    lblMessage.textContent = "du har vundet";
    console.log("vundet");
  } else {
    lblMessage.textContent = "prøv igen";
    console.log("try again");
  }
}

pbGuess.addEventListener("click", guessNumber);
