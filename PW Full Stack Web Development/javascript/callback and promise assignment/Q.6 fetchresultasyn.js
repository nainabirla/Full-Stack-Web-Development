/*Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.*/

async function fetchdata(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

fetchdata();

//{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }