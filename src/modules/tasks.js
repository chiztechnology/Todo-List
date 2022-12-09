import resetIndex from './index-resetter.js';
import { loadTasks, saveTask } from './Save-and-load.js';

export default class Task {
  constructor(id, description, completed) {
    this.index = id;
    this.description = description;
    this.completed = completed;
    return { id: this.index, description: this.description, completed: this.completed };
  }
}

export const addTask = (element, tasks) => {
  tasks.push(element);
  // save books to local storage
  saveTask(tasks, 'todo-list');
};

export const removeTask = (id, tasks) => {
  const newArray = tasks.filter((element) => element.index !== id);
  // reset inde before save
  // save to local storage
  saveTask(resetIndex(newArray), 'todo-list');
  // then return newArray
};

export const showTask = (task) => {
  const article = document.createElement('article');
  article.setAttribute('class', 'todo-article');
  const div = document.createElement('div');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox')
  input.setAttribute('name', 'check');
  input.setAttribute('id', task.index);
  input.setAttribute('style', 'margin-right:5px;');
  const span = document.createElement('span');
  span.innerHTML = task.description;
  span.setAttribute('style', 'outline:none');
  span.setAttribute('class', 'single-line');
  span.setAttribute('contentEditable', true);

  if (task.completed) {
    span.classList.add('finished-task');
    input.checked = true;
  }

  // button
  const butt = document.createElement('button');
  butt.setAttribute('type', 'button');
  butt.setAttribute('class', 'task-btn');
  butt.innerHTML = '&#8942';

  div.appendChild(input);
  div.appendChild(span);
  article.appendChild(div);
  article.appendChild(butt);
  input.onclick = () => {
    if (task.completed) {
      const tasks = loadTasks('todo-list');
      let objIndex = tasks.findIndex(((obj) => obj.index === task.index));
      // Update object's description property.
      tasks[objIndex].completed = false;
      // update task & refresh DOM
      saveTask(tasks, 'todo-list');
      span.classList.toggle('finished-task');

    } else {
      const tasks = loadTasks('todo-list');
      const objIndex = tasks.findIndex(((obj) => obj.index === task.index));
      // Update object's description property.
      tasks[objIndex].completed = true;
      // update task & refresh DOM
      saveTask(tasks, 'todo-list');
      span.classList.toggle('finished-task');
    }
  };

  span.oninput = () => {
    const tasks = loadTasks('todo-list');
    const objIndex = tasks.findIndex(((obj) => obj.index === task.index));
    // Update object's description property.
    tasks[objIndex].description = span.innerText;
    saveTask(tasks, 'todo-list');
  };

  span.onfocus = () => {
    // edit element
    article.classList.toggle('editing-mode');
    butt.classList.toggle('yellow-bg');
    butt.innerHTML = '&#x1F5D1';
    butt.onclick = () => {
      removeTask(task.index, loadTasks('todo-list'));
      article.remove();
    }
  };

  span.onblur = () => {
    article.classList.toggle('editing-mode');
    butt.classList.toggle('yellow-bg');
    butt.innerHTML = '&#8942';
  };

  return article;
};