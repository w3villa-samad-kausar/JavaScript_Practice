const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const startButton=document.getElementById("start");
const stopButton=document.getElementById("stop");
const colour=document.querySelector(".colour");

let intervalId=null

const selectColor=function(){

  let hexColour='#';
  
  for (let i=0;i<6;i++){
    hexColour+=hex[getRandomNumber()];
  }
  document.body.style.backgroundColor=hexColour;
  colour.textContent=hexColour;
  }
const settingInterval=function(){
  if(!intervalId){
    intervalId=setInterval(selectColor,500);

  }
}
const stopInterval=function(){
  clearInterval(intervalId);
  intervalId=null;
}

startButton.addEventListener("click",settingInterval)
stopButton.addEventListener("click",stopInterval)


function getRandomNumber(){
  return Math.floor(Math.random()*hex.length);
}