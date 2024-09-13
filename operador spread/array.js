number=2;
const range = [...Array(3).keys()].map(i => i + 1);
const results = range.map(i => number*i);
console.log(results);