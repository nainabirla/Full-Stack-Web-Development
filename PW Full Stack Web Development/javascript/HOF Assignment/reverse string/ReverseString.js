let input = prompt("Enter a string");
function reverse(){
    let revstr ='';
    let stringLen = input.length;
    for(let i=stringLen-1;i>=0;i--){
        revstr+=(input[i]);
    }
    alert(`Reverse of ${input} is ${revstr}`);

}

setTimeout(reverse, 2000);