function calculate(string) {
  const words = string.split(" ");

  const numbers = words.filter((w) => !isNaN(Number(w))).map(Number);

  if (words.includes("loses")) {
    return numbers.reduce((acc, curr) => acc - curr);
  } else if (words.includes("gains")) {
    return numbers.reduce((acc, curr) => acc + curr);
  } else {
    return numbers.reduce((acc, curr) => acc + curr);
  }
}

console.log(calculate("Panda has 48 apples and loses 4"));
console.log(calculate("Jerry has 34 apples and gains 6"));
