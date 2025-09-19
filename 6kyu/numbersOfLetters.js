function numbersOfLetters(integer) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let result = [];

  // Step 1: function to turn a number into digit-words
  function numberToWords(num) {
    return String(num)
      .split("")
      .map((digit) => numberWords[Number(digit)])
      .join("");
  }

  // First word from the given integer
  let current = numberToWords(integer);
  result.push(current);

  // Step 2: loop until stable
  while (true) {
    const length = current.length;
    const next = numberToWords(length);

    result.push(next);

    if (next === current) break; // stable equilibrium

    current = next;
  }

  return result;
}
