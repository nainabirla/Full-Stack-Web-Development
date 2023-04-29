function PercentageOfDiscount(products){
    let discountPercentage = []
    for(let i=0;i<products.length;i++){
        let product=products[i];
        discountPercentage.push(Math.floor(((product.originalPrice-product.discountedPrice)/product.originalPrice)*100)+"%")
    }
    return discountPercentage;
}

products=[
    {originalPrice: 500, discountedPrice: 300},
    {originalPrice: 800, discountedPrice: 400},
    {originalPrice: 1000, discountedPrice: 700},
    {originalPrice: 200, discountedPrice: 100}
]
console.log(PercentageOfDiscount(products));