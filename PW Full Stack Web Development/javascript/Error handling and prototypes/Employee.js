class Employee{
    constructor(name, position, salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }

    getSalary(){
        return `My name is ${this.name}. My salary is ${this.salary}. I am ${this.position} in this company.`;
    }
}

let emp1 = new Employee("Naina", "Full Stack web developer", 50000);
console.log((emp1.getSalary()));

