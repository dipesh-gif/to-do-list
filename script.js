document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');

    const taskValue = taskInput.value;
    const dateValue = dateInput.value;

    if (taskValue === '' || dateValue === '') {
        return;
    }

    addTask(taskValue, dateValue);

    taskInput.value = '';
    dateInput.value = '';
});

function addTask(task, date) {
    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;

    const dateSpan = document.createElement('span');
    dateSpan.className = 'task-date-time';
    dateSpan.textContent = formatDate(new Date(date));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(dateSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}

function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };
    return date.toLocaleString('en-US', options);
}
