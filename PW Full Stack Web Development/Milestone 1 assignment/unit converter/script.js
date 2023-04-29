function celToFeh(){
    const celcius = document.getElementById("celcius").value
    const result = document.getElementById("result")
    let fehrenheit = (celcius * 9/5) + 32
    result.innerText=fehrenheit
}
document.getElementById("btn").addEventListener("click", celToFeh)