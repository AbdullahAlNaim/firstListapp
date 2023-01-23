const lister = document.querySelector('#taskList');
const inputTask = document.querySelector('#inputTask');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = inputTask.value;
    const newLi = document.createElement('li');
    newLi.innerText = taskValue;
    form.appendChild(newLi);
    console.log(`submitted ${taskValue}`)
})