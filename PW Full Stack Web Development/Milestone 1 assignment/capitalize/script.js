function capitalName(){
    const nameEl = document.getElementById("first-name").value;
    const result = document.getElementById("result");
    result.innerText=nameEl.charAt(0).toUpperCase() + nameEl.slice(1);
    console.log(result.innerText);
}

