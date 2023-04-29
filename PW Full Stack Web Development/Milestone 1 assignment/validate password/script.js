function validate(){
    const email =document.getElementById("email").value;
    const password =document.getElementById("password").value;
    const validateEl=document.getElementById("validate")
    if(email.includes("@gmail.com") && password.length>=8){
        validateEl.innerText="Valid Email and Password";
        validateEl.style.color="green";
    }
    else{
        validateEl.innerText="InValid Email and Password";
        validateEl.style.color="red";
        
    }
}

document.getElementById("submit-btn").addEventListener("click", validate);