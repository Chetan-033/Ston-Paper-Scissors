let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");

const drawGame=()=>{
    msg.innerText="Game Was Draw";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        msg.innerText='You Win! Your '+userChoice+' beats '+compChoice;
        userScorePara.innerText=userScore;
        msg.style.backGroundColor ="green";
    }
    else{
        compScore++;
        msg.innerText= 'You Lose. '+compChoice +' beats your '+userChoice;
        compScorePara.innerText=compScore;
        msg.style.backGroundColor= "red";
    }
};

const genCompChoice=()=>{
    const option=["ston","paper","scissors"]
    return option[Math.floor(Math.random()*3)];
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
});

const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    console.log(userChoice,compChoice)

    if(userChoice==compChoice)
    {
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="ston")
        {
            userWin=compChoice=="paper" ? false :true;
        }
        else if(userChoice=="paper")
        {
            userWin=compChoice=="scissors" ? false :true;
        }
        else if(userChoice=="scissors")
        {
            userWin = compChoice=="ston" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};