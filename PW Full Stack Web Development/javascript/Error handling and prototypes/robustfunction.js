function getperson(person){
    try{
        if(typeof person!=="object"||!person.hasOwnProperty("name")||!person.hasOwnProperty("age")){
            throw new Error("invalid error type")
        }
        return `Name : ${person.name} Age: ${person.age}`;
    }
    catch(err){
        return err.message;
    }

}
console.log(getperson({name: "Naina", age: 24}));
console.log(getperson({name: "Naina"}));
console.log(getperson('Naina',24));


