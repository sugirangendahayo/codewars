const prevMultOfThree = (n) => {
  const splitNumbers = n.toString().split("");

  for (let i = 0; i < splitNumbers.length; i++) {
    const currentNum = Number(splitNumbers.join(""));
    if (currentNum % 3 === 0) return currentNum;
    else splitNumbers.pop(); 
  }
  return null;
};
console.log(prevMultOfThree(92));
