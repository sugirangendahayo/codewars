function solve(eq) {
  const containedNumbers = eq.match(/\d+/g);
  console.log(containedNumbers);

  const reverseNumbers = containedNumbers.map((num) =>
    num.split("").reverse().join("")
  );
  console.log(reverseNumbers);

  return eq
    .split("")
    .reverse()
    .join("")
    .replace(reverseNumbers, containedNumbers);
}
const callFunc = solve("j*h-12+z/g+t*82*7*l*01*i*q/k-a");
console.log(callFunc);
