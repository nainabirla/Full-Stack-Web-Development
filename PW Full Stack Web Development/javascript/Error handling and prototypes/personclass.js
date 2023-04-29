class person{
    constructor(name="Unknown", age=0){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return `Name: ${this.name} Age: ${this.age}`;
    }
}

let person1=new person("Naina", 24);
console.log(person1.getDetails());
let person2=new person();
console.log(person2.getDetails());

