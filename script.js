let buttons = document.querySelectorAll(".box");
let ResetButton = document.querySelector("#reset");
let rstbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".new-game");
let msg = document.querySelector("#msg");

let turn0 =true;

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableButton();
    msgContainer.classList.add("hidden");
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (turn0){
            button.innerText = "O";
            turn0 = false
        }
        else{
            button.innerText = "X";
            turn0 = true
        }
        button.disabled = true;
        checkWinner();
    });
});

const enableButton = () => {
    for(let button of buttons){
        button.disabled = false;
        button.innerText="";
    }
}

const disabledButton = () => {
    for(let button of buttons){
        button.disabled = true;
    }
}

let showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    disabledButton();
}

const checkWinner = () => {
    for(let pattern of WinPatterns){
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
ResetButton.addEventListener("click",resetGame);




    
