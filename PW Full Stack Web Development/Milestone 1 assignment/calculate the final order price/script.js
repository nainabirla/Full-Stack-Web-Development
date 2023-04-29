function totalCostOfItems(cartItems){
    let totalCost = 0;
    for(let i=0; i<cartItems.length;i++){
        item=cartItems[i];
        totalCost += item.unitPrice * item.quantity;
    }
    return totalCost;
}
let cartItems =[
    {unitPrice: 200  ,quantity: 2},
    {unitPrice: 500  ,quantity: 3},
    {unitPrice: 100  ,quantity: 4}
]
totalPrice = totalCostOfItems(cartItems);
console.log(totalPrice);