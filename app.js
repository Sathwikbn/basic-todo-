// To-Do List App - Vanilla JS

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Add task on button click
    addBtn.addEventListener('click', addTask);
    // Add task on Enter key
    taskInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) return;
        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;
        span.addEventListener('click', function() {
            span.classList.toggle('completed');
        });

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }
});
