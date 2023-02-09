//catturiamo prima il form
// con l'event listener

const button = document.querySelector(".button"); //seleziona il bottone
const input = document.querySelector(".input");
const div = document.querySelector(".div");

let todoList = [];

button.addEventListener("click", (e) => {
  //qui tutto quello che succede dopo il click -> aggiungo gli elementi alla lista

  const main = document.createElement("div");

  const task = document.createElement("p"); // inserisco nell html un <p>
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  deleteButton.innerText = "cancella";
  const content = document.createTextNode(input.value);
  console.log(input.value);
  todoList.push(content.nodeValue);
  input.value = "";
  console.log(todoList);
  e.preventDefault(); //evita l'azzermento prima del caricamento
  task.appendChild(content);
  main.appendChild(task);
  main.appendChild(deleteButton);
  main.appendChild(check);

  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
      console.log(this.parentNode);
    };
  }
});
