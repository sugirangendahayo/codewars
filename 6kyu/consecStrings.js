function lowestProduct(input) {
  const convertedToArray = input.split("");
  let allGroups = [];
  if (input.length < 4) {
    return "Number is too small";
  }

  for (let i = 0; i <= convertedToArray.length - 4; i++) {
    const group = convertedToArray.slice(i, i + 4);
    allGroups.push(group);
  }
  //   console.log("All groups:", allGroups);
  let minSum = Infinity; // start with a very large number
  for (let i = 0; i < allGroups.length; i++) {
    const group = allGroups[i];

    // convert each element to number and sum
    const sum = group.reduce((acc, val) => acc * Number(val), 1);

    if (sum < minSum) {
      minSum = sum;
    }
  }
  return minSum;
}
console.log(lowestProduct("123456789"));

