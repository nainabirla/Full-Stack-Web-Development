/*Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.*/

function bookTitleInAlphabeticalOrder(books, callback){
    const bookTitles = books.map(book=>book.title);
    const sortedBooks= bookTitles.sort();
    callback(sortedBooks);
}

const books = [
    {title:"1984",author:"George Orwell",year:1949},
    {title:"To Kill a Mockingbird",author:"Harper Lee",year:1960},
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }

];

function printBookTitles(titles){
    console.log("Book titles in alphabetical order");
    titles.forEach(title=>console.log(title));
}


bookTitleInAlphabeticalOrder(books, printBookTitles);