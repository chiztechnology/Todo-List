import clearCompleted from './src/modules/clear-completed-task.js';

const task1 = [
  {
    index: 0,
    description: 'Pay the bills',
    completed: true,
  },
  {
    index: 1,
    description: 'Read Books',
    completed: true,
  },
  {
    index: 2,
    description: 'Finish the project',
    completed: false,
  },
];

describe('Clear all the completed tasks', () => {
  it('Clear all', () => {
    expect(clearCompleted(task1)).toStrictEqual([
      {
        index: 2,
        description: 'Finish the project',
        completed: false,
      },
    ]);
  });
});
