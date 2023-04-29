// HIGHER ORDER FUNCTION
// const powerTwo = (n)=>{
//     return n ** 2;
// }
// function powerCube(powerTwo, n){
//     return powerTwo(n) * n;
// }

// console.log(powerCube(powerTwo, 3));

// function sayHello(){
//     return () => {
//         console.log("Hello Naina");
//     }
// }

// let guessValue = sayHello();
// console.log(guessValue);
// sayHello();
// guessValue();

const higher = n => {
    const oneFun = m => {
        const twoFun = o => {
            return m + n + o
        }
        return twoFun()
    }
    return oneFun()
}
console.log(higher(2)(3)(4));