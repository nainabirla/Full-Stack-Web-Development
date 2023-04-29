/*Check the presence using closures.
Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.*/
function numberChecker(arr){
    return function(num){
        return arr.includes(num);
    }
}

const arr=[10,20,30];
const number = numberChecker(arr);
console.log(number(20));
console.log(number(40));
