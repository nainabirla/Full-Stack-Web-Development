const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const operatorEl = document.getElementById("operator");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click",()=>{
    switch(operatorEl.value){
        case'+':
        resultEl.innerText=(parseInt(num1El.value) + parseInt(num2El.value));
        break;
        case'-':
        resultEl.innerText=(parseInt(num1El.value) - parseInt(num2El.value));
        break;
        case'*':
        resultEl.innerText=(parseInt(num1El.value) * parseInt(num2El.value));
        break;
        case'/':
        resultEl.innerText=(parseInt(num1El.value) / parseInt(num2El.value));
        break;



    }
})