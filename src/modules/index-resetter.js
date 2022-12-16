export default function resetIndex(array) {
  for (let i = 1; i <= array.length; i += 1) {
    array[i - 1].index = i;
  }
  return array;
}