let calculateRentalCost = (days, typeOfCar)=>{
    switch(typeOfCar){
        case 'Economy':
            console.log("Rental Cost is: " + 4000 * days);
            break;
        case 'Midsize':
            console.log("Rental Cost is: " + 10000 * days);
            break;
        case 'Luxury':
            console.log("Rental Cost is: " + 20000 * days);
            break;
    }
}
let typeOfCar='Economy';
let days=5;
calculateRentalCost(days, typeOfCar);