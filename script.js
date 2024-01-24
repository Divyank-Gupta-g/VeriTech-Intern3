document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskTitle = document.getElementById('task-input').value;
    const taskDescription = document.getElementById('description-input').value;

    if (taskTitle && taskDescription) {
        addTaskToList(taskTitle, taskDescription);
    } else {
        alert('Please enter both a task title and description.');
    }
});

// Add a prioritization option
const priorities = ['High', 'Medium', 'Low'];

// Create a new task list item
function addTaskToList(taskTitle, taskDescription, priority = 'Medium', isCompleted = false) {
    const taskList = document.querySelector('.task-list');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <h2>${taskTitle}</h2>
        <p>${taskDescription}</p>
        <p>Priority: ${priority}</p>
        <p>Status: ${isCompleted ? 'Completed' : 'Pending'}</p>
        <div class="task-buttons">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="toggleTaskStatus(this)">${isCompleted ? 'Mark Pending' : 'Mark Completed'}</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(taskItem);

    // Clear input fields
    document.getElementById('task-input').value = '';
    document.getElementById('description-input').value = '';
}

function editTask(taskElement) {
    const taskItem = taskElement.parentElement.parentElement;
    const newTitle = prompt('Enter the new task title:');
    const newDescription = prompt('Enter the new task description:');

    if (newTitle && newDescription) {
        taskItem.querySelector('h2').textContent = newTitle;
        taskItem.querySelector('p').textContent = newDescription;
    }
}

// Function to toggle task status (completed or pending)
function toggleTaskStatus(taskElement) {
    const taskItem = taskElement.parentElement.parentElement;
    const currentStatus = taskItem.querySelector('p:nth-child(5)').textContent;
    const newStatus = currentStatus === 'Completed' ? 'Pending' : 'Completed';

    taskItem.querySelector('p:nth-child(5)').textContent = newStatus;
}

function deleteTask(taskElement) {
    const taskItem = taskElement.parentElement.parentElement;
    taskItem.remove();
}