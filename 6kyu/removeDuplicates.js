const removeDup = (array)=>{
  const newArray = [...new Set(array)];
  return newArray;
}
console.log(removeDup([1,1,2,2,3,3,4,4,5,5]))