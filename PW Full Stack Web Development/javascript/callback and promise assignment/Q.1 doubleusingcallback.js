/*Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.*/

function multiplyByTwo(num){
    return num*2;
}

function doublenum(arr, multiplyByTwo){
    let double = arr.map(element=>{
        return multiplyByTwo(element);
    });
    return double;
}

const arr=[10,20,30];
console.log(doublenum(arr, multiplyByTwo));