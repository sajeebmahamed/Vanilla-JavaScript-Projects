const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const todo = document.getElementById("todo");
let todoList = [];
console.log(todoList);
form.addEventListener('click', function(e) {
    e.preventDefault()
    addToDo()
})

function addToDo() {
    const newTodo = input.value;
    if(!newTodo) return 

    todoList.push({
        text: newTodo,
        completed: false 
    })

    localStorage.setItem("todos", JSON.stringify(todoList))
    render()
}

function render() {
    todo.innerHTML = null
    const todos = localStorage.getItem("todos");
    todoList = JSON.parse(todos) || []

    for(let i=0; i< todoList.length; i++) {
        const item = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = checkbox

        checkbox.addEventListener('click', function(e) {
            todoList[i].completed = e.target.checked

            localStorage.setItem("todos", JSON.stringify(todoList))

            if(todoList[i].completed) {
                item.classList.add('completed')
                item.classList.remove('uncompleted')

                checkbox.checked = todoList[i].completed
            }else {
                item.classList.add('uncompleted')
                item.classList.remove('completed')

                checkbox.checked = todoList[i].completed
            }
            
        })
        // create text node
        const text = document.createElement("p");
        text.innerText = todoList[i].text;

        // create delete button
        const button = document.createElement("button");
        button.innerText = "X";
        button.addEventListener("click", function () {
            todoList.splice(i, 1);
            localStorage.setItem("todos", JSON.stringify(todoList));
            render();
        });

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todo.appendChild(item);
        input.value = null;
        
    }
    
}

