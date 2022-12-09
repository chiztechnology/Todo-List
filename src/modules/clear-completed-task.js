import resetIndex from './index-resetter.js';

export default function clearCompleted(tasks){
  let tempArray = [];
  // get completed tasks indexes
  for (let i = 0; i < tasks.length; i + 1) {
    if (tasks[i].completed) {
      tempArray.push(tasks[i].index);
    }
  }

  // delete values
  for (let i = 0; i < temp_array.length; i + 1) {
    tasks = tasks.filter((element) => element.index !== tempArray[i]);
  }
  return resetIndex(tasks);
};