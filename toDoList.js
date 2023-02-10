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

  deleteButton.innerText = "cancella";
  const content = document.createTextNode(input.value);
  console.log("input: ", input.value);
  todoList.push(content.nodeValue); // inseriamo il task nell'array 
  input.value = "";
  console.log(todoList);
  e.preventDefault(); //evita l'azzermento prima del caricamento
  task.appendChild(content); // <p> content </p>
  main.appendChild(task); // <div> <p> content </p> <div>
  main.appendChild(deleteButton); // <div> <p> content </p> <button> cancella </button></div>
  div.appendChild(main);

  var current_tasks = document.querySelectorAll(".delete"); // cicla tutti 
  for (var i = 0; i < current_tasks.length; i++) // cicla tutti gli elementi con classe "delete"
  {
    current_tasks[i].onclick = function () // al click viene "nascosto" il task
    {
      this.parentNode.remove();
      console.log(this.parentNode);
    };
  }
});
