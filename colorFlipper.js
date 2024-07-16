const colours=["red","blue","green","yellow","brown","grey","purple"]
const startButton=document.getElementById("start");
const stopButton=document.getElementById("stop");
const colour=document.querySelector(".colour");
let intervalId=null
const selectColor=function(){
  
  const randomNumber=getRandomNumber();
  document.body.style.backgroundColor=colours[randomNumber];
  colour.textContent=colours[randomNumber]

}
const settingInterval=function(){
  if(!intervalId){
    intervalId=setInterval(selectColor,500);
  }
  
}
const stoppingInterval=function(){
  clearInterval(intervalId);
  intervalId=null;
}

startButton.addEventListener("click",settingInterval)
stopButton.addEventListener('click',stoppingInterval);

function getRandomNumber(){
  return Math.floor(Math.random()*colours.length);
}