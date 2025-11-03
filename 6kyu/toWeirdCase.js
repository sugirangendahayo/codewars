function makeCharsafterSpacetartatZero(string) {
  let newStr = "";
  let localIndex = 0;

  for (const char of string) {
    if (char === " ") {
      newStr += " ";
      localIndex = 0;
    } else {
      if (localIndex % 2 === 0) {
        newStr += char.toUpperCase();
      } else {
        newStr += char.toLowerCase();
      }
      localIndex++;
    }
  }

  return newStr;
}

console.log(makeCharsafterSpacetartatZero("This is a test"));
