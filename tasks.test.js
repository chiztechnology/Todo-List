import { addTask, removeTask } from "./src/modules/tasks";

jest.mock('./src/modules/Save-and-load.js');

test('Add task', () => {
  expect(addTask(
    {
      index: 32,
      description: 'Paying water bills',
      completed: false
    }, [])
  ).toStrictEqual(
    [
      {
        index: 32,
        description: 'Paying water bills',
        completed: false
      }
    ])
});

