var num1 =parseInt(window.prompt("enter the number 1"));
var num2 =parseInt(window.prompt("enter the number 2"));

if(isNaN(num1) || isNaN(num2)){
    alert("enter the appropriate number");
}
else if(num1 == num2){
    document.write("two numbers are equal");
}
else if(num1> num2){
    document.write(num1 +  " is larger");
}else{
    document.write(num2 +  " is larger");
}