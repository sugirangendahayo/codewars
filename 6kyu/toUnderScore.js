const toUnderScore = (name) => {
  let newStr = "";
  for (const [idx, n] of Array.from(name).entries()) {
    if (n === n.toUpperCase()) {
      if (idx === 0 || idx === -1) {
        
      }
      newStr += "_";
    }
    newStr += n;
  }
  return newStr;
};
console.log(toUnderScore("camelCase"));
console.log(toUnderScore("Calculate15Plus5Equals20"));
console.log(toUnderScore("This_Is_Already_Split_Correct"));
console.log(toUnderScore("ThisIs_Not_SplitCorrect"));
console.log(toUnderScore("_UnderscoreMarked_Test_Name_"));
