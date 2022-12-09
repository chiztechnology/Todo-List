export default function resetIndex(array) {
  // eslint-disable-next-line no-use-before-define
  for (let i = 1; i <= array.length; i++) {
    array[i - 1].index = i;
  }
  return array;
}