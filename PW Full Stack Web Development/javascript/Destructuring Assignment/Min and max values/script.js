const arr=[1,45,76,98,2];
function min_max(arr){
    const max=Math.max(...arr);
    const min=Math.min(...arr);
    console.log(`Maximum value is: ${max}`);
    console.log(`Minimum value is: ${min}`);
}
min_max(arr);

