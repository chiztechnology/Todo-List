export default resetIndex = (array) => {
  for (let i = 1; i <= array.length; i++) {
    array[i - 1].index = i;
  }
  return array;
}