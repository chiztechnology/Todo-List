import './styles.css';
// import Icon from './updates.png';
let tasks = [
  {
    index: 1,
    description: 'Read my lesson',
    completed: true,
  },
  {
    index: 2,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    index: 3,
    description: 'Running erands in town',
    completed: false,
  },
];

// document.querySelector('resync-icon').src = Icon;

window.onload = ()=>{
  // fetch tasks

}

document.getElementById('todo-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  let desc = document.getElementById('todo-desc');
  tasks.push(new Object({index: tasks[tasks.length-1].index + 1, description: desc, completed: false}));
  // refresh DOM by adding new value on the screen
})