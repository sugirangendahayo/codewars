function solution(string) {
  const splitString = string.split("");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === splitString[i].toUpperCase()) {
      const indexOfCamel = splitString.indexOf(splitString[i]);
      console.log(indexOfCamel);

      console.log("Cs: ", splitString);
    }
    if (splitString[i] === splitString[i].toLowerCase()) {
      console.log("Lowercase");
    }
  }

  return string;
}
const callFunc = solution("camelCase");
console.log(callFunc);
