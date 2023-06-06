//* ------ Selectors ------- */
const selectionArticle = document.querySelector(".selection");

//? Secilen elemanlarin tayicilari
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//? message
const messagePar = document.querySelector(".message");

//? Score-Card
const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");

//? Top Score
const topYourScoreSpan = document.getElementById("top-your-score");
const topPcScoreSpan = document.getElementById("top-pc-score");

//? modal card
const modalCardSection = document.querySelector(".modal-card");
const finalMessagePar = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-again");

//* ------- Variables ------- */
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
let pcRandom;

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//* ------- Event Listeners ------- */

selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});

playAgainBtn.addEventListener("click", () => {
  topYourScoreSpan.textContent = yourScoreSpan.textContent;
  topPcScoreSpan.textContent = pcScoreSpan.textContent;
  modalCardSection.classList.toggle("show");
  yourScoreSpan.innerText = "0";
  pcScoreSpan.innerText = "0";
});

//* ------- Functions ------- */
const createPcSelection = () => {
  const pcArry = ["rock", "paper", "scissor"];
  pcRandom = pcArry[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  if (userSelectImg.alt === pcRandom) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "Its a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.background = YELLOW;
  messagePar.style.ba;
};

const youLost = () => {
  messagePar.textContent = "You Lost";
  scoreCardSection.style.color = RED;
  messagePar.style.background = RED;
  pcScoreSpan.textContent++;
};

const youWin = () => {
  messagePar.textContent = "You Win";
  scoreCardSection.style.color = GREEN;
  messagePar.style.background = GREEN;
  yourScoreSpan.textContent++;
};

//? Modal aç
const openModal = () => {
  modalCardSection.classList.add("show");

  if (yourScoreSpan.textContent === "10") {
    finalMessagePar.textContent = "😎 You Win 😎";
    document.querySelector(".modal").style.backgroundColor = GREEN;
    playAgainBtn.style.color = GREEN;
  } else {
    finalMessagePar.textContent = "😒 You lost 😒";
    document.querySelector(".modal").style.backgroundColor = RED;
    playAgainBtn.style.color = RED;
  }
};
