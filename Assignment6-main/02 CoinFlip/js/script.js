var coinFlip = Math.round(Math.random());
var choice = window.prompt("select (Heads/Tails)");
        
/* Assumption:
    heads if coinFlip is 0 
    tails if result is 1 */

var coinFlip_Res = (coinFlip == 0) ? "heads" : "tails";
 /*document.write(coinFlip_Res + " " + coinFlip + "<br>");  */ 
      

if(coinFlip_Res === "heads"  && choice === "Heads")
{
    window.alert("The flip was heads and you chose heads...you win");
}
else if(coinFlip_Res === "heads" && choice === "Tails"){
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(coinFlip_Res === "tails" && choice === "Heads"){
    window.alert("The flip was tails but you chose heads...you lose!");
}
else if(coinFlip_Res === "tails" && choice === "Tails"){
    window.alert("The flip was tails and you chose tails...you win!");
}
else{
    alert("Invalid input");
}