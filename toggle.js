const button = document.getElementById("btn");

let currentMode = "light";

button.addEventListener("click", () => {
  if (currentMode === "light") {
    document.body.style.backgroundColor = "black";
    button.innerText = "Click for light mode";
    currentMode = "dark";
  }
  else if(currentMode==="dark"){
    document.body.style.backgroundColor = "white";
    button.innerText = "Click for dark mode";
    currentMode = "light";
  }
  
})
