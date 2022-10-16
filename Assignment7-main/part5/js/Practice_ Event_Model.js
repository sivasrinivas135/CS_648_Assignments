//step 1
function writeMessage(){
    window.alert("I have been clicked");
}

// step 5
window.document.addEventListener("DOMContentLoaded", init, false);

//step 2
function init(){
var myElement = document.getElementById("myButton2");
myElement.onclick = writeMessage;

//step 3
var myButton = document.getElementById("myButton3");
// myButton.addEventListener("click", writeMessage);

 //step 4
myButton.addEventListener("click", function(){
    window.alert("I have been clicked");
});
}
