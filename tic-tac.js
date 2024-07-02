const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector("#new-game");
const resetGameBtn = document.querySelector("#reset-game");
const message = document.querySelector(".display-text");
const winMessage = document.querySelector("#message");

const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinnerOrDraw();
  });
});

const checkWinnerOrDraw = () => {
  let isDraw = true;
  for (let pattern of winner) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      return;
    }

    if (!pos1Val || !pos2Val || !pos3Val) {
      isDraw = false;
    }
  }

  if (isDraw) {
    showDraw();
  }
};

const showWinner = (winner) => {
  winMessage.innerText = `Congratulations, Winner is ${winner}`;
  message.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  winMessage.innerText = `It's a draw!`;
  message.classList.remove("hide");
  disableBoxes();
};

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  message.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

resetGameBtn.addEventListener("click", resetGame);
