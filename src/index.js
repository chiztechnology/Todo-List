import './styles/styles.css';
import { loadTasks, saveTask } from './modules/Save-and-load.js';
import { addTask, showTask } from './modules/tasks.js';
import clearCompleted from './modules/clear-completed-task.js';
import resetIndex from './modules/index-resetter';

let tasks = [];

window.addEventListener('load', () => {
  // fetch data from local storage
  tasks = loadTasks('todo-list');
  if (tasks !== null) {
    tasks.forEach((element) => {
      // to be used in the parent component
      document.querySelector('.listTodo').appendChild(showTask(element));
    });
  } else {
    // no books found
    tasks = [];
  }
});

document.getElementById('todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const tasks = loadTasks('todo-list');
  const desc = document.getElementById('todo-desc').value;
  const obj = {
    index: tasks.length === 0 ? 1 : tasks.length + 1,
    description: desc,
    completed: false,
  };

  // adding new value
  addTask(obj, loadTasks('todo-list'));
  // Refresh The DOM
  document.querySelector('.listTodo').appendChild(showTask(obj));
  document.getElementById('todo-desc').value = '';
});

document.getElementById('clear-completed').addEventListener('click', (e) => {
  e.preventDefault();

  saveTask(resetIndex(clearCompleted(loadTasks('todo-list'))), 'todo-list');
  // refresh DOM
  document.querySelector('.listTodo').innerHTML = '';

  tasks = loadTasks('todo-list');

  if (tasks !== null) {
    tasks.forEach((element) => {
      // to be used in the parent component
      document.querySelector('.listTodo').appendChild(showTask(element));
    });
  } else {
    // no books found
    tasks = [];
  }
});