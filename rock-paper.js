let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const userScoreMessage = document.getElementById("user-score");
const compScoreMessage = document.getElementById("comp-score");
const compChoiceMessage=document.querySelector(".comp-choice-para");
const resultMessage=document.querySelector(".message-para");

const compChoiceGenerator=()=>{
  const choicesArray=["Rock","Paper","Scissors"]
  const randomNumber=Math.floor(Math.random()*3);
  return choicesArray[randomNumber];
}
const compareChoices=(uChoice,cChoice)=>{
  if(uChoice==="Rock"){
    if (cChoice==="Rock"){
      return "Draw";
    }
    else if(cChoice==="Paper"){
      compScore++;
      return "Computer won";
    }
    else{
      userScore++;
      return "You won";
    }
  }
  else if(uChoice==="Paper"){
    if (cChoice==="Rock"){
      userScore++;
      return "You won";
    }
    else if(cChoice==="Paper"){
      return "Draw";
    }
    else{
      compScore++;
      return "Computer won"
    }
  }
  else if(uChoice==="Scissors"){
    if (cChoice==="Rock"){
      compScore++;
      return "Computer won";
    }
    else if(cChoice==="Paper"){
      userScore++;
      return "You won";
    }
    else{
      return "Draw";
    }
  }
}

const playGame= (userChoice)=>{
  
  const compChoice = compChoiceGenerator();
  const result = compareChoices(userChoice,compChoice);

  userScoreMessage.innerText=userScore;
  compScoreMessage.innerText=compScore;
  
  compChoiceMessage.innerHTML="Computer chose : "+compChoice;
  compChoiceMessage.classList.remove("hide");

  if(result==="You won"){
    resultMessage.style.backgroundColor="#7FEFBD";
    resultMessage.style.color="#48435C";
  }
  else if(result==="Computer won"){
    resultMessage.style.backgroundColor="#D64933";
  }
  else{
    resultMessage.style.backgroundColor="#0A100D";
  }
  resultMessage.innerHTML=result;
  
}

choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    const choiceId = choice.getAttribute("id")
    playGame(choiceId);
  })
}
)