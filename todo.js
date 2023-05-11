const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");



const TODOS_KEY ="todos";


let toDos = []; 

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}






 function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
 }

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText ="X"
    button.addEventListener("click",deleteToDo )
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleToDoSummit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSummit);





const savedToDos =localStorage.getItem(TODOS_KEY);


if(saveToDos !== null){ 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}