import { resetIndex } from "./index-resetter";

export const clearCompleted = (tasks = []) => {
  let temp_array = [];
  // get completed tasks indexes
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      temp_array.push(tasks[i].index);
    }
  }

  // delete values
  for( let i =0; i< temp_array.length; i++){
    tasks = tasks.filter((element) => element.index !== temp_array[i])
  }
  
  console.table(resetIndex(tasks));

  return resetIndex(tasks);
}