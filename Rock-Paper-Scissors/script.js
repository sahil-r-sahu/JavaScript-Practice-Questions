let userscore = 0;
let compscore = 0;

const choose = document.querySelectorAll(".select");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const body = document.querySelector("body");
const resetBtn = document.querySelector("#reset-btn");


let gameOver = false;




const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3); // using floor to get whole number and multiplying by 3 to get numbers in range 0 to 2.
    return options[randomIdx];                       // Uses the genrated number to pick a random choice from the array.
};

const drawGame = () => {
    msg.innerText = "Game was draw 🤝🤝🤝 Play again";
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin, userselects, compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win!!! 😊🎉🎉✌️👏👏😊--- Your ${userselects} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose 💔😭😢😭💔--- ${compchoice} beats your ${userselects}`;
        msg.style.backgroundColor = "rgb(233, 73, 34)";
    }
}



const playGame = (userselects) => {
    if(gameOver) return;

    console.log("user selects = ", userselects);
    const compchoice = genCompChoice();              //calling function
    console.log("comp selects = ", compchoice);

    if (userselects === compchoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userselects === "rock") {
            //scissor OR paper
            //userWin = compchoice === "paper" ? false : true;
            if (compchoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userselects === "paper") {
            //userWin= compchoice === " scissors" ? false : true;
            if (compchoice === "scissors") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else {
            if (compchoice === "rock") {
                userWin = false;
            } else {
                userWin = true;
            }
        }
        showWinner(userWin, userselects, compchoice);

        if (userscore === 5 || compscore === 5) {
            gameOver = true;

            if (userscore === 5) {
                msg.innerText = "🎉 Game Over! You won the match! 🎉";
                body.style.backgroundColor = "darkgreen";
            } else {
                msg.innerText = "💀 Game Over! Computer won the match! 💀";
                body.style.backgroundColor = "darkred";
            }
        }


    }
};

choose.forEach((select) => {
    select.addEventListener("click", () => {
        const userselects = select.getAttribute("id");
        playGame(userselects);

    });
});

resetBtn.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    msg.innerText = "Play your turn 🎮";
    msg.style.backgroundColor = "black";
    body.style.backgroundColor = "white"; // optional: reset background
    gameOver = false;
});