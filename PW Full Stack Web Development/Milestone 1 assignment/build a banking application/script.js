function deposit(user, amount){
    user.balance+= amount;
    
}

function withdraw(user, amount){
    if(user.balance>=amount){
        user.balance-=amount;
    }
    else{
        console.log("Insufficient balance");
    }
}

let user=
    {name: 'Naina', balance: 2000};


deposit(user, 1000) 
console.log(user);
// output: { name: 'Naina', balance: 3000 }



withdraw(user, 2000) //output: 1000
console.log(user);
// output: { name: 'Naina', balance: 1000 }