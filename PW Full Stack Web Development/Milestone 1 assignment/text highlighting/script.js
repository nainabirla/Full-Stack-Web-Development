const para = document.getElementById("my-paragraph");
const words=para.textContent.split(" ")
for(let i=0;i < words.length;i++){
    if(words[i].length>8){
        words[i] = "<span style='background: yellow'>" + words[i] + "</span>";
    }

}
para.innerHTML=words.join(" ");

/