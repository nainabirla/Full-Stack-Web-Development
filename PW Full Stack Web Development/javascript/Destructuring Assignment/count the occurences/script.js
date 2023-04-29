function countOccurence(){const myText = "cat dog stop rain cat rain"
const words = myText.split(' ')
const myMap = new Map();
for(let i=0;i<words.length;i++){
    let word = words[i];
    if(myMap.has(word)){
        let countOcc = myMap.get(word);
        myMap.set(word, countOcc+1);
    }
    else{
        myMap.set(word, 1);
        
    }
}
for(let [word,countOcc] of myMap){
    console.log(`${word}: ${countOcc}`);
}
}

countOccurence();