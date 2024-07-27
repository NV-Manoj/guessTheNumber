const formDetails = document.getElementById("form");
const judge = document.getElementById("judgeTheguess");
let noOfGuesses = 0;

let genNumber = Math.floor(Math.random() * 100 + 1);

formDetails.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputValue = parseInt(document.getElementById("inputt").value);
  noOfGuesses += 1;
  if (inputValue == genNumber) {
    judge.textContent = `Congratulations !! You Have Guessed The Correct Number in ${noOfGuesses} Guesses`;
    noOfGuesses = 0;
    judge.style.color = "rgb(6, 248, 6)";
    judge.style.fontSize = "24px";
  } else if (inputValue < genNumber) {
    judge.textContent = `You are Less From the Target , this is Your ${noOfGuesses} Guess`;
    judge.style.color = "yellow";
  } else if (inputValue > genNumber) {
    judge.textContent = `You are More From the Target , this is Your ${noOfGuesses} Guess`;
    judge.style.color = "red";
  }

  document.getElementById("inputt").value = "";
});
