function solution(string) {
  let newStr = "";
  for (const str of string) {
    if (str === str.toUpperCase()) {
      newStr += " ";
    }
    newStr += str;
  }
  return newStr;
}
console.log(solution("camelCaseSjkkLjj"));
