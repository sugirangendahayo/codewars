function evenOrOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

// Allow "evenOrOdd[number]" syntax to work for any number
evenOrOdd = new Proxy(evenOrOdd, {
  get: function (target, prop) {
    const num = Number(prop);
    if (!isNaN(num)) {
      return num % 2 === 0 ? "Even" : "Odd";
    }
    return target[prop];
  },
});

console.log(evenOrOdd(2)); // 'Even'
console.log(evenOrOdd[2]); // 'Even'
console.log(evenOrOdd(7)); // 'Odd'
console.log(evenOrOdd[7]); // 'Odd'
console.log(evenOrOdd[-44]); // 'Even'
console.log(evenOrOdd[-44]); // 'Even'
