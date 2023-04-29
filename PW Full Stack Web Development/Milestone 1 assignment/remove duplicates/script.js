let itemContainer = []
function addItem(){
    let item = document.getElementById("user-item").value
    if(!item){
        alert("please enter item")
        return;
    }
    if(!itemContainer.includes(item)){
        itemContainer.push(item)
        alert("Item added successfully")
    }
    else{
        alert("Item already added")
    }
}
document.getElementById("submit-btn").addEventListener("click", addItem)