function billSplitter(dishCost, noOfPeople){
    let totalCost = 0;
    for(let cost of dishCost){
        totalCost += cost;
    }
    costPerPerson = totalCost/noOfPeople;
    return {
        totalBill : totalCost,
        billPerPerson: costPerPerson
    }
}
dishCost=[100,200,500,200];
noOfPeople=5;
bill = billSplitter(dishCost, noOfPeople)
console.log(bill);

//OUTPUT: { totalBill: 1000, billPerPerson: 200 }