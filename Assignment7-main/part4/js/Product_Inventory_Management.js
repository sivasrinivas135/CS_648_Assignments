var inventory = [ 
    [4824, "Shirt", 10, "$15.99"], 
    [6343, "Jeans", 22, "$39.99"], 
    [3223, "Socks", 36, "$9.99"], 
    [2233, "Hat", 12, "$14.99"], 
    [9382, "Jacket", 5, "$49.99"]                               
 ];

function displayMenu(){
    window.console.log("The Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update a product ");
    window.console.log("exit - exit the programm");
    window.console.log("");
 }



 function display(inventory){
    inventory.forEach(function(item){
        window.console.log(item[0] +" "+item[1]+" "+"("+item[2]+") "+item[3]);
    });
    window.console.log("");
 }



function update(inventory){
    var sku_choice = window.prompt("Enter a sku number");
    var sku = Number(sku_choice);
    if(!isNaN(sku) && sku != null && sku >= 0){
        var quantity_choice = window.prompt("Enter a new stock quantity");
        var quantity = Number(quantity_choice);

        if(!isNaN(quantity) && quantity!= null && quantity >=0){
            var recordUpdated = false;
            for(var i=0; i<inventory.length ; i++)
            {
                
                if(inventory[i][0] == sku)
                {
                    inventory[i][2] = quantity;
                    recordUpdated = true;
                    window.console.log("Succesfully updated!!");
                    break;
                }
            }
            if(recordUpdated == false)
            {
                window.console.log("Did not find a valid record to update");
            }
           // inventory[sku_position][2] = quantity;
            window.console.log("");
        }
        else{
            window.alert("Enter a valid quantity number");
        }
    }
    else{
        window.alert("Enter a valid sku number");
    }
}

 function main(){
    displayMenu();
    
     while(true){

        var command= window.prompt("Enter the command");
        if(command !== null){
            command = command.toLowerCase();
            if(command === "view"){
                display(inventory);
            }
            else if(command === "update"){
                update(inventory);
            }
            else if(command === "exit"){
                break;
            }
            else if(command === ""){
               
                window.alert("Empty command is not a valid input");
            }
            else{
                window.alert("Not a valid input");
            }
        }
        else{
           // alert("enter the command");
            break;
        }
     }
     window.console.log("Program terminated");
    }
 main();