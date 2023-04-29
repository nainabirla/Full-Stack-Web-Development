function invertedtriangle(){
    const userRows = document.getElementById("user-rows").value
    const result = document.getElementById("result")
    result.innerHTML=""
    for(let i=1;i<=userRows;i++){
        var parent = document.createElement("div")
        for(let j=1;j<=userRows-i+1;j++){
            var child = document.createElement("span")
            child.innerHTML="* "
            parent.appendChild(child)
        }
        result.appendChild(parent)
    }

}
document.getElementById("btn").addEventListener("click", invertedtriangle)