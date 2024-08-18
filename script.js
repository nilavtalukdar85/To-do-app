let input = document.querySelector('.input-text');
let addBtn = document.querySelector('.submit-button');
let tasks = document.querySelector('.tasks');
let count = 0;
addBtn.addEventListener('click', () => {
    if(input.value != '') {
        let newEl = document.createElement('div');
        newEl.setAttribute('class', 'task-field');
        newEl.innerHTML = `<div class="task-text"></div>
                           <div class="task-buttons">
                              <button class="done">Done</button>
                              <button class="delete">X</button>
                           </div>`;
        tasks.append(newEl);
        let taskText = document.querySelectorAll('.task-text');
        taskText[count].innerText = `${count + 1}. ${input.value}`;
        let text = taskText[count];
        input.value = '';
        let doneButtons = document.querySelectorAll('.done');
        doneButtons.forEach((doneButton) => {
            doneButton.addEventListener('click', () => {
                let child = doneButton.parentElement;
                child.parentElement.firstChild.style.textDecoration = 'line-through';
            });
        });
        let deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener('click', () => {
                let child = deleteButton.parentElement;
                child.parentElement.remove();
            });
        });
        count += 1;
    } else {
        alert('You must enter a task');
    }
});