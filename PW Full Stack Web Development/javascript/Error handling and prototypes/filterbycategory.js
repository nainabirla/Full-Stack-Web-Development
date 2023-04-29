/*Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input.*/
const products = [
    {name: "top", category: "Clothing"},
    {name: "earrings", category: "Accessories"},
    {name: "belt", category: "Accessories"},
    {name: "jeans", category: "Clothing"}
];

function filterbycategory(products){
    return function (category){
        return products.filter(function(product){
            return product.category.toLowerCase()===category.toLowerCase();
        });
    }
}

const clothingProducts = filterbycategory(products)("Accessories");
console.log(clothingProducts);