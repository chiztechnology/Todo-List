import clearCompleted from './src/modules/clear-completed-task.js';
import { addTask } from './src/modules/tasks.js';

import 'jest-localstorage-mock';

const task1 = {
  index: 0,
  description: 'Pay the bills',
  completed: true,
};
const task2 = {
  index: 1,
  description: 'Read book',
  completed: true,
};
const task3 = {
  index: 2,
  description: 'Finish the projects',
  completed: false,
};

describe('Clear all the completed tasks', () => {
  it('Clear all', () => {
    localStorage.clear();
    addTask(task1, [localStorage.getItem('todo-list')]);
    addTask(task2, [localStorage.getItem('todo-list')]);
    addTask(task3, [localStorage.getItem('todo-list')]);
    clearCompleted([localStorage.getItem('todo-list')]);
    /* eslint-disable no-underscore-dangle */
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
