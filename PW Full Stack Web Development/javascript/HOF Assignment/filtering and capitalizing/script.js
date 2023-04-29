const listOfBooks = [
	{nameOfBook: "young minds", Author: "Preeti",publicationYear: 1998},
	{nameOfBook: "rich dad poor dad", Author: "Priya",publicationYear: 2000},
	{nameOfBook: "igniting minds", Author: "Sudha",publicationYear: 2011},
	{nameOfBook: "peace of mind", Author: "Ram",publicationYear: 2015}
];
function filtering(){

    let arr=[];
    
    const output = listOfBooks.filter(listOfBooks => listOfBooks.publicationYear > 2010);
    for(let i=0;i<output.length;i++){
        arr.push(output[i].nameOfBook.charAt(0).toUpperCase()+output[i].nameOfBook.slice(1));
    };
    return arr;
}
let result = filtering();
console.log(result);

