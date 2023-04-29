const result = document.getElementsByClassName("result");
const btn = document.getElementById("btn");

const randomColor=()=>{
    let val="1234567890ABCDEF";
    let cons="#";
    for(let i=0; i<6;i++){
        cons=cons+val[Math.floor(Math.random()*16)]
    }
    return cons;
}

let changeRandomColour=()=>{
    result[0].style.backgroundColor=randomColor();
    result[1].style.backgroundColor=randomColor();

}
btn.addEventListener("click", changeRandomColour);