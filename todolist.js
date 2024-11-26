const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', function () {
    const task = prompt('Ajoutez la tâche :');
    if (task) {
        addTask(task);
    }
});

function addTask(task) {
    const li = document.createElement('li');

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${task}</span>
        <span class="delete">Delete</span>
    `;

    li.querySelector('.task-checkbox').addEventListener('change', function () {
        li.classList.toggle('completed'); 
    });
    
    li.querySelector('.delete').addEventListener('click', function () {
        li.remove(); 
    });

    taskList.appendChild(li);
}

taskInput.addEventListener('input', function() {
    var recherche = taskInput.value.trim();
    var tasks = document.querySelectorAll('li');
    tasks.forEach(function(task) {
        if (task.textContent.toLowerCase().includes(recherche.toLowerCase())) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
});