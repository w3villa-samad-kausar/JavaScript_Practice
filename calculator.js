let input = "";

const buttons = document.querySelectorAll(".btn");
const upperBox = document.querySelector(".upperBox");
const lowerBox = document.querySelector(".lowerBox");

buttons.forEach(function (button) {
  button.addEventListener("mousedown", function () {
    button.classList.add("pressed");
  });

  button.addEventListener("mouseup", function () {
    button.classList.remove("pressed");
  });

  button.addEventListener("mouseleave", function () {
    button.classList.remove("pressed");
  });

  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      input = eval(input);
      lowerBox.value = input;
    } else if (e.target.innerHTML == "C") {
      input = "";
      lowerBox.value = input;
      upperBox.value = input;
    } else if (e.target.innerHTML == "X") {
      input = input.slice(0, -1);
      upperBox.value = input;
    } else {
      input = input + e.target.innerHTML;
      upperBox.value = input;
    }
  });
});
