// function add(x, y){
//     return x+y
// }
// console.log(add(1,5))
// function sum([num1, num2]){
//     return num1 + num2;
// }
// let num=[10,50];
// let result=sum(num);
// console.log(result);
function sum(){
    let sum=0;
    for(var i=0; i<arguments.length;i++)
    sum = sum + arguments[i];
    return sum;
}
let result=sum(1,2,3,4);
console.log(result);