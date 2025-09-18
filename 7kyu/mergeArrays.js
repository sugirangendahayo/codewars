function mergeArrays(arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];
  mergedArr.sort((a, b) => a - b); 
  const uniqueArray = mergedArr.filter(
    (item, pos, self) => self.indexOf(item) === pos
  );
  return uniqueArray;
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));

