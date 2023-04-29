//Generating random number
function randomNumberDelay(){
    let randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
}


setTimeout(()=>{
    console.log("3 seconds left");
}, 1000)
setTimeout(()=>{
    console.log("2 seconds left");
}, 2000);
setTimeout(()=>{
    console.log("1 seconds left");
}, 3000);

setTimeout(randomNumberDelay, 4000); 






