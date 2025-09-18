function sumMix(x) {
  const convertNums = x
    .map((val) => {
      return typeof val === "string" || typeof val === "number"
        ? Number(val)
        : undefined;
    })
    .reduce((acc, val) => acc + val, 0);

  return convertNums;
}
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
