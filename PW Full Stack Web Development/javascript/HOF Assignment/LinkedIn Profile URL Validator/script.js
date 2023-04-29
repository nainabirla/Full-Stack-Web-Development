let url="https://www.linkedin.com/in/naina-birla-7a43a320b/"
const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,35}[a-zA-Z0-9]/;
const match = url.match(regex);
if(match){
    console.log("valid linkedIn profile url");
}
else{
    console.log("Invalid linkedIn profile url");
}
