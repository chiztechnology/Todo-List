import './styles/styles.css';
import { loadTasks, saveTask } from './modules/Save-and-load';
import { addTask, showTask } from './modules/tasks';
import { clearCompleted } from './modules/clear-completed-task';

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
  let tasks = loadTasks('todo-list');
  console.log(tasks.length);
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
  console.log(`clear finished tasks`);
  
  saveTask(clearCompleted(loadTasks('todo-list')), 'todo-list');
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