function calcVowel(){
    const userName = document.getElementById("user-name").value
    const result = document.getElementById("result")
    
    let count = 0
    for(let i=0 ; i<userName.length ;i++){
        if(userName[i]=='a'||userName[i]=='e'||userName[i]=='i'||userName[i]=='o'||userName[i]=='u'||userName[i]=='A'||userName[i]=='E'||userName[i]=='I'||userName[i]=='O'||userName[i]=='U')
        count++;
    }
    result.innerText=count
}
document.getElementById("submit-btn").addEventListener("click", calcVowel)

