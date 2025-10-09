function replaceWords(sentence) {
  let words = sentence.replace(/[^\w\s]/g, "").split(" ");
  let newArr = [];

  if (words.length) {
    words.sort((a, b) => a.length - b.length);
    let index = 1;
    for (let word of words) {
      let longest = words[words.length - index];
    //   console.log(words);
     newArr.push(longest);
     console.log(newArr);
     
      console.log(`${index} shortest: ${word}, ${index} longest: ${longest}`);
      index++;
    }
  }
}
replaceWords("I am better than him");
