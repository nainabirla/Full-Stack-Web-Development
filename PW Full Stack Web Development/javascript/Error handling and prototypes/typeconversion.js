function convertToNumber(str){
    try{
        const num = Number(str);
        if(isNaN(num)){
            throw new Error("invalid number")
            console.log(num);
        }
        else{
            console.log(num);
        }
        
    }
    catch(err){
        console.log(err);
    }
}
convertToNumber("123");
convertToNumber("Naina");
