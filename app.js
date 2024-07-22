let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg")


const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame = () => {
    console.log("Game was Drawn....")
    msg.innerText = "Game Drawn."
    msg.style.backgroundColor="black";
    
}


const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore++;
        userScorePara.innerText=userscore
        msg.innerText = `You   Win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compScorePara.innerText=compscore
        msg.innerText = `You lose. ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"
    };
}
const playgame = (userchoice) => {
    console.log("User choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);
    if(userchoice === compchoice) {
        drawgame();
    } else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice ==="paper") {
            userwin = compchoice ==="scissor" ? false : true;
        } else {
            userwin = compchoice ==="rock" ? false : true;   
        }
        showwinner(userwin,userchoice,compchoice);    
    }


};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    });
});