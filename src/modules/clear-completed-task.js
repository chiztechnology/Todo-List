import resetIndex from './index-resetter.js';

export default function clearCompleted(tasks) {
  const tempArray = [];
  // get completed tasks indexes
  for (let i = 0; i < tasks.length; i + 1) {
    if (tasks[i].completed) {
      tempArray.push(tasks[i].index);
    }
  }

  // delete values
  for (let i = 0; i < tempArray.length; i + 1) {
    tasks = tasks.filter((element) => element.index !== tempArray[i]);
  }
  return resetIndex(tasks);
}