class Car{
    constructor(model, company, year){
        this.model=model;
        this.company=company;
        this.year=year;
    }

    carDescription(){
        return `This is a ${this.model} ${this.company} ${this.year}`;
    }
}

let Car1 = new Car("Wagon R", "Maruti", 2021);
console.log(Car1.carDescription());
console.log(Car1);

