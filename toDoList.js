//catturiamo prima il form
// con l'event listener 

const button = document.querySelector('.button'); //seleziona il bottone
const input = document.querySelector('.input');
const div = document.querySelector('.div');
button.addEventListener('click', (e)=>{
    //qui tutto quello che succede dopo il click -> aggiungo gli elementi alla lista 
    const task = document.createElement('p'); // inserisco nell html un <p>
    const content = document.createTextNode(input.value);
    console.log(input.value); 
    e.preventDefault(); //evita l'azzermento prima del caricamento
    task.appendChild(content);
    div.appendChild(task);


})
