
const btn = document.getElementById("btn");
const taskList = document.getElementById("task-list");
btn.addEventListener("click", ()=>{
    let userTask = document.getElementById("user-task").value;
    if(userTask === ''){
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li")
    li.innerText = userTask;
    taskList.appendChild(li);
    userTask = '';
});


