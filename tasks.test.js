import { addTask, removeTask } from './src/modules/tasks.js';

jest.mock('./src/modules/Save-and-load.js');

describe('Add and remove Tasks', () => {
  it('Add task', () => {
    expect(
      addTask(
        {
          index: 32,
          description: 'Paying water bills',
          completed: false,
        },
        [],
      ),
    ).toStrictEqual([
      {
        index: 32,
        description: 'Paying water bills',
        completed: false,
      },
    ]);
  });

  it('remove Task', () => {
    expect(
      removeTask(32, [
        {
          index: 32,
          description: 'Paying water bills',
          completed: false,
        },
      ]),
    ).toStrictEqual([]);
  });
});
