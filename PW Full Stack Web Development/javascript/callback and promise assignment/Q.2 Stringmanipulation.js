/*String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
with the manipulated string or the new string to the console.*/

function logString(manipulatedstr){
    console.log(`Manipulated string is ${manipulatedstr}`);
}

function manipulatestring(str, logString){
    let manipulatedstr = str.toUpperCase();
    return function(){
        logString(manipulatedstr);
    }
}

let str = "Hello everyone";
let logStringCallback = manipulatestring(str, logString);
logStringCallback();
