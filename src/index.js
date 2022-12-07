import './styles.css';
// import ResyncIcon from './resync-icon.png';
import OptionIcon from './OptionIcon.png';

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

// document.querySelector('.resync-icon').src = ResyncIcon;
// document.querySelectorAll('.option-icon').src = OptionIcon;


window.onload = ()=>{
  // fetch tasks
  tasks.forEach((task)=>{
    document.querySelector('.listTodo').innerHTML += `<article class="todo-article">
    <div>
      <input type="checkbox" name="check" id="checkbox-${task.index}" value="">
      <label for="checkbox-${task.index}">${task.description}</label>
    </div>
    <a href="#"><img src=${OptionIcon} alt="option icon" class="option-icon"></a>
  </article>`;
  });

};

document.getElementById('todo-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  let desc = document.getElementById('todo-desc').value;
  tasks.push(new Object({index: tasks[tasks.length-1].index + 1, description: desc, completed: false}));
  // refresh DOM by adding new value on the screen
})

document.getElementById('clear-completed').addEventListener('click', (e)=>{
  e.preventDefault();
})