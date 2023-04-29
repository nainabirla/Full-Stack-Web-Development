const Student = function(name){
    this.name=name;
}

Student.prototype.printDetails=function(){
    return `Hello, My name is ${this.name}`;
}

const student1 =new Student('Naina');
console.log(student1.printDetails());
