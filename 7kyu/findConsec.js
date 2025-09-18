function firstNonConsecutive(arr) {
  let current;

  for (let i = 1; i <= arr.length; i++) {
    current = arr[i - 1];

    if (i !== current) {
      console.log(current);
      return current;
    }
  }
  return null;
}
console.log(firstNonConsecutive([1, 2, 3, 4]));
