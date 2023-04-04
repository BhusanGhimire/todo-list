let outputDiv = document.getElementById("outputDiv");
let btn = document.getElementById("btn");
let todoInLocal = JSON.parse(localStorage.getItem("todos")) || [];
let inputDiv = document.querySelector("#inputDiv")
function todo(){
    let inputField = inputDiv.querySelector("input");
    let inputValue = inputField.value;
    //will add todo li in the the DOM
    if(inputValue != ""){
    outputDiv.insertAdjacentHTML("beforeend",`<li class="todoData"><span>${inputValue}</span> <span class="material-symbols-outlined cancelLogo" onclick="remove.bind(this)()">cancel</span></li>`)
    todoInLocal.push(inputValue);
    inputField.value = "";
    localStorage.setItem("todos", JSON.stringify(todoInLocal))
}
}

btn.addEventListener("click", () => todo());
window.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    todo();
  }
});

//will add todo from local storage to DOM
if(todoInLocal.length >= 1){
todoInLocal.forEach((todoItem) => {
outputDiv.insertAdjacentHTML("beforeend",`<li class="todoData"><span>${todoItem}</span> <span class="material-symbols-outlined cancelLogo" onclick="remove.bind(this)()">cancel</span></li>`)
})
}

function remove() {
    outputDiv.removeChild(this.parentElement);
    todoInLocal = todoInLocal.filter(todo => todo != this.parentElement.children[0].innerHTML)//the span tag inside which the tasks to do is written by user or from local storage
    localStorage.setItem("todos", JSON.stringify(todoInLocal))
}
