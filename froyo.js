
     // Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
     "Please enter some flavors separated by commas.",
     "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
   );

     // Split the string of flavors into an array of flavors.
const stringArray = userInputString.split(",");
    //Test:
    // if(stringArray === undefined) {
    //     console.log("this is undefined")
    // }; 
    // console.log(stringArray);

    //Initializing container for order without assigning keys:
const iceCreamOrder = {};

function printIceCreamOrder(stringArray) {
    // "Cannot read properties of undefined (reading length)" error here:
    for(let i = 0; i < stringArray.length; i++) {
    //^^this loop will iterate through the array passed by the user.
    //the conditional statements below will use the flavors in the array as keys in the iceCreamOrder object
    //if the flavor is in the array more than once, the conditional statment will increment its count, otherwise it will assign the value as 1  
        if(iceCreamOrder[stringArray[i]]) {
            iceCreamOrder[stringArray[i]]++;
        } else {
            iceCreamOrder[stringArray[i]] = 1;
        }
};
    //once loop is complete, console.table order 
    console.log("Your order is as follows:");
    console.table(iceCreamOrder);
};
//fixed "undefined" error on line 20 by passing "stringArray" as a parameter to the function:
printIceCreamOrder(stringArray);