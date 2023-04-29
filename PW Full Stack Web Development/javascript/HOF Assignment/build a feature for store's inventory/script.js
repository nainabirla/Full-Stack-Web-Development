let itemsInDollars = { 
    milk: 4,
    fruits: 10,
    curd: 2,
    bottles: 15,
    vegetables: 8
};

Object.keys(itemsInDollars).forEach(function(key, index) {
  itemsInDollars[key] *= 80;
});

console.log(itemsInDollars);
