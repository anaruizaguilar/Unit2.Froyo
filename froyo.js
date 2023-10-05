  //create a an object for the ice cream
  //use arrays and console.table 


//so the code should look something like this

/*"Please enter what flavors of ice crea you would like by commas
"vanilla,vanilla,vanilla,strawberry,coffee,coffee"

[USER]: vanilla,vanilla,coffee,chocolate,strawberry,strawberry,strawbery

[CODE OUTPUT]: [IN TABLE FORM ON HTML] I THINK
________________________________________
|                                      |
|vanilla         |  2                  |
|chocolate       |  1                  |
|strawberry      |  3                  |
|coffee          |  1                  |
|______________________________________|   
*/

//THIS IS THE ACTUAL CODE

const userInputString = prompt(
  "Please enter what flavors of ice cream you would like by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavors = userInputString.split(",");
const numIceCream = flavors.length; //this will give us the user input in an array

console.log(flavors);
console.log("You have inputed a total of " + numIceCream + " ice cream flavors");


let count = 1;

for( let i=0; i<flavors.length; i++) { //this will count any duplicate orders the user has inputed
  for(let j=i+1; j<flavors.length; j++){
    if(flavors[i] == flavors[j]){
      count++
    }
    else{
      const valFlavor = `${count}${flavors[i]}`; //this is only showing how any duplicate values are in the array rather than showing the actual numbers of flavors *still need to work on it
      
      count = 1                                   
    }
  }
}

console.log(count); 
