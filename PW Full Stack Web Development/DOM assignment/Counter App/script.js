const increment=document.getElementById("increment");
const decrement=document.getElementById("decrement");
const reset=document.getElementById("reset");
const displayValue=document.getElementById("displayValue");

decrement.addEventListener("click", () => {
    const value=Number(displayValue.innerText);
    if (value > 0){
        displayValue.innerText = value - 1;
    }
    else {
        alert("negative values not allowed");
    }
});
increment.addEventListener("click", () => {
    const value=Number(displayValue.innerText);
    if(value >= 10){
        alert("10+ values not allowed");
    }
    else{
        displayValue.innerText= value + 1;
    }
});
(
reset.addEventListener("click", () => {
    displayValue.innerText=0;
}));

