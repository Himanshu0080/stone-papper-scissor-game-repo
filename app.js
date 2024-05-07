let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")
const genCompChoice=()=>{
    //rock ,papper, scissor
    let options=["rock","papper","scissor"]
    let randIdx=Math.floor( Math.random()*3)
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Game Was Draw");
    msg.innerText="Draw Game! Play Again"
    msg.style.backgroundColor="#081b31"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin=true){
        userscore++
        userScorePara.innerText=userscore
        msg.innerText=`you win your ${userChoice} beats ${compChoice}`
        console.log("you win!");
        msg.style.backgroundColor="green"
        
    }
    else{
        compScorePara.innerText=compscore
        msg.innerText=`you lose . ${compChoice} beats your ${userChoice}`
        console.log("you lose");
        msg.style.backgroundColor="red"
    }
}

const playGame=(userChoice)=>{
    console.log("user choice is = ",userChoice);
    //generate comp choice
    const compChoice=genCompChoice()
    console.log("comp choice is = ",compChoice);

    if(userChoice === compChoice){
        //game draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor , papper
            userWin=compChoice==="papper" ? false : true
        }else if(userChoice==="papper"){
            //rock, scissor
            userWin=compChoice==="scissor" ? false : true

        }else{
            //rock ,papper
           userWin=compChoice==="rock" ? false : true
        }
        showWinner(userWin,userChoice,compChoice);
    }





}


choices.forEach((choice)=>{
    console.log(choice);
choice.addEventListener("click",()=>{
   
    let userChoice=choice.getAttribute("id")
    
    playGame(userChoice)


})
})