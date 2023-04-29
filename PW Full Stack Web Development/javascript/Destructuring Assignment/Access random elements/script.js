function accessRandomElement(arr){
    const [first, second, ...n]=arr;
    const last = n.pop();
    return [first, second, last]


}
let arr= [1,2,3,5]
const [first, second , last] = accessRandomElement(arr)

console.log([first, second , last]);
