name = 'Roderick';
var name;
console.log(name); //Logs my name
function setName() {
    var name = 'Covalence';
    console.log(name); //Logs: Covalence
}
console.log('Before findAverage() is called.');
let myAverage = findAverage(80, 88);
console.log('After findAverage() was called. myAverage() is ${myAverage}!');
//Should log: After findAverage() was called. myAverage is  84!
function findAverage(number1, number2) {
    console.log('Inside of findAverage().');//Should log: Inside of fondAverage();
    var answer = (number1 + number2) / 2;
    return answer;
}

let fruits = ['Mango', 'Banana', 'Apple'];
let favoriteFruit; //Global
let leastFavoriteFruit; //Global

function printFruit(index) {
    console.log('Print my favorite fruit: ${fruits[index]}');
    let favoriteFruit = fruits[1];
    let leastfavoriteFruit = fruits[2];

    function printMyFavoriteFruit() {
        console.log('Print my favorite fruit: ${favoriteFruit}');
    }
    printMyFavoriteFruit();
    //Should log: Banana
}

console.log('Print my least-favorite fruit: ${leastFavoriteFruit}');
//Should log: undefined 
printFruit(0);
//Should log: Mango

myName();
function myName() {
    console.log('My name is ${name}');
}

let alertThisMessage = function (message) {
    alert(message);
}
alertThisMessage('Hello World!'); //Should alert: Hello World 

/*
* Roderick
* Covalence
* Before findAverage() is called.
* Inside of findAverage().
* After findAverage() was called. myAverage() is 84!
* Print my least-favorite fruit: undefined
* Print my first fruit: Mango
* Print my favorite fruit: Banana
* My name is: Roderick
* End of Script.
*/

console.log('End of script.'); // Should log: End of script.