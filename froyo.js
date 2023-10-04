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

const count = {}

for( let i=0; i<flavors.length; i++) {
  for(let j=i+1; j<flavors.length; j++){
    if(flavors[i] == flavors[j]){
      count++
    }
  }
}

console.log(count);

const objFlavors = {

}

