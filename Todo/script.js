const lister = document.querySelector('#taskList');
const inputTask = document.querySelector('#inputTask');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const liButton = document.querySelectorAll('.checked');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = inputTask.value;
    const newLi = document.createElement('li');
    newLi.innerText = taskValue;
    let perButton = document.createElement('button');

    let newtask = ul.appendChild(newLi);
    ul.appendChild(newLi);
    newtask.append(perButton);
    perButton.append(" \u2713");
    perButton.className += 'checked'
    console.log(`submitted ${taskValue}`)
    inputTask.value = '';
})

for (let x = 0; x < liButton.length; x++) {
    liButton[x].addEventListener('click', () => {
        console.log('pressed', liButton[x], x)
    })

}


// liButton.foreach((button) => {
//     // button.addEventListener('click', () => {
//     //     console.log('checked off');
//     // })
//     console.log(liButton)
// })