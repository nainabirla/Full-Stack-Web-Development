const passwordEl = document.getElementById("password");
const cpasswordEl = document.getElementById("c-password");
const buttonEl = document.getElementById("submit-btn");

buttonEl.addEventListener("click", ()=>{
    
        if(cpasswordEl.value == passwordEl.value){
            alert("Login successful");

        }
        else{
            alert("Try again, password do not match");
        }
    
    
});

