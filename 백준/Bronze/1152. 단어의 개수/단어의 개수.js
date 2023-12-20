const input = require('fs').readFileSync('/dev/stdin').toString();

const wordsArr = input.trim().split(' ');
const words = wordsArr.filter((word) => word !== '');
answer = words.length;

console.log(answer);