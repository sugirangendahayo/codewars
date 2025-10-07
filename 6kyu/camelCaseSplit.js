function solution(string) {
  let newStr = "";
  for (const [idx, str] of Array.from(string).entries()) {
    if (str === str.toUpperCase()) {
      newStr += " ";
    }
    newStr += str;
  }
  return newStr;
}
console.log(solution("camelCaseSjkkLjj"));
