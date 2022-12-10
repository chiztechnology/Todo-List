export const loadTasks = (key) => {
  let tasks = [];
  if (JSON.parse(localStorage.getItem(key)) !== null) {
    tasks = JSON.parse(localStorage.getItem(key));
    return tasks;
  }
  return [];
};

export const saveTask = (tasks, key) => {
  localStorage.setItem(key, JSON.stringify(tasks));
};