// Phase 1
function getUserChoice(){
    var userChoice = window.prompt("Select your choice (rock/scissors/paper)");
    if(userChoice === "rock" || userChoice === "scissors" || userChoice === "paper"){
        return userChoice;
    }else{
       window.alert("invalid input");
    }
}

// Phase 2
function getComputerChoice(){
    var computerChoice =  Math.floor(Math.random() * 3);
    switch(computerChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;  
         case 2:
            return "paper";
            break;        

    };
}

// Phase 3
function gameWinner()
{
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();
         
    if(userChoice === computerChoice ){
        alert("Game is tie");
    }
    else if(userChoice === "rock"){
        if(computerChoice === "scissors"){
            alert("You won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }
        else if(computerChoice === "paper"){
            alert("Computer won!"  + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }
              
    }
    else if(userChoice === "scissors"){
        if(computerChoice === "paper"){
            alert("You won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }
        else if(computerChoice === "rock"){
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }
    }
    else if(userChoice === "paper"){
        if(computerChoice === "rock"){
            alert("You won!" + " your choice is: " + userChoice + "  & Computer Choice is: " + computerChoice);
        }
        else if(computerChoice === "scissors"){
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice);
        }
              
    }

}
// function to play again
function play()
{
    do{
        gameWinner();
        var playAgain = window.confirm("Play Again?") ;
    }while(playAgain);
}
play();