import {
  addTask,
  removeTask,
  updateTask,
  updateStatus,
} from './src/modules/tasks.js';

import 'jest-localstorage-mock';

const task1 = {
  index: 0,
  description: 'Pay the bills',
  completed: true,
};

describe('Add and remove Tasks', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Add task', () => {
    addTask(task1, (localStorage.getItem('todo-list') || []));
    const storage = JSON.parse(localStorage.getItem('todo-list'));
    expect(storage[0].index).toBe(0);
  });

  it('remove Task', () => {
    addTask(task1, (localStorage.getItem('todo-list') || []));
    expect(
      removeTask(0, JSON.parse(localStorage.getItem('todo-list'))),
    ).toStrictEqual([]);
  });

  it('Update the task', () => {
    addTask(task1, (localStorage.getItem('todo-list') || []));
    const storage = JSON.parse(localStorage.getItem('todo-list'));
    updateTask('Pay the bills', 0, storage);
    expect(storage[0].description).toStrictEqual('Pay the bills');
  });

  it('Update complete status', () => {
    addTask(task1, (localStorage.getItem('todo-list') || []));
    const storage = JSON.parse(localStorage.getItem('todo-list'));
    updateStatus(true, 0, storage);
    expect(storage[0].completed).toStrictEqual(false);
  });
});
