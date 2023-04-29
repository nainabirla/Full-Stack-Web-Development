function swapValues(a,b){
    console.log(`Before swapping value of a and b is: ${a} ${b} `);
    [a,b]=[b,a];
    console.log(`After swapping value of a and b is: ${a} ${b} `);
}
swapValues(5,10);
