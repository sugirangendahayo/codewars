// const reverseCase = (string) => {
//   for (const [index, value] of Array.from(string).entries()) {
//     for (const [secIndex = index + 1, secValue] of Array.from(
//       string
//     ).entries()) {
//       if (value === secValue) {
//       console.log(`${value} ${secValue}`);
//       secIndex++;
//       }
//     }
//   }
// };
// console.log(reverseCase("Salomon"));
const reverseCase = (string) => {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i - 1] || string[i] === string[i + 1]) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }

  return result;
};

console.log(reverseCase("Saaalomon")); 

