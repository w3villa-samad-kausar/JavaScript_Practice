let count=0;

const increaseButton= document.getElementById("plus");
const decreaseButton= document.getElementById("minus");
const resetButton= document.getElementById("reset");
const counter= document.querySelector(".counterValue");

increaseButton.addEventListener("click",function(){
  count++;
  counter.textContent=count;
  counter.style.color = "green";
})
decreaseButton.addEventListener("click",function(){
  count--;
  counter.textContent=count;
  counter.style.color = "red";
})
resetButton.addEventListener("click",function(){
  count=0;
  counter.textContent=count;
  counter.style.color = "black";
})

