let num1, num2, operator, correctAnswer;

const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const operatorEl = document.getElementById("operator");
const answerEl = document.getElementById("answer");
const resultEl = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;

  const operators = ["+", "-", "*"];
  operator = operators[Math.floor(Math.random() * operators.length)];

  if (operator === "+") correctAnswer = num1 + num2;
  if (operator === "-") correctAnswer = num1 - num2;
  if (operator === "*") correctAnswer = num1 * num2;

  num1El.textContent = num1;
  num2El.textContent = num2;
  operatorEl.textContent = operator;

  answerEl.value = "";
  resultEl.textContent = "";
}

checkBtn.addEventListener("click", () => {
  const userAnswer = Number(answerEl.value);

  if (answerEl.value === "") {
    resultEl.textContent = "Enter an answer!";
    resultEl.style.color = "orange";
    return;
  }

  if (userAnswer === correctAnswer) {
    resultEl.textContent = "Well Done 🎉";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "Try Again ❌";
    resultEl.style.color = "red";
  }
});

restartBtn.addEventListener("click", generateQuestion);

generateQuestion();
