// require('fs').readFileSync('/dev/stdin')
// require('fs').readFileSync('testCase.txt')
const input = require('fs').readFileSync('/dev/stdin').toString();


const lines = input.split('\n');
// regex contains a e i o u A E I O U
const regex = new RegExp('[aeiouAEIOU]');

const answer = lines.map((line) => {
  if (line === '#') {
    return;
  }
  let count = 0;
  const chars = [...line];

  chars.forEach((char) => {
    if (regex.test(char)) {
      count += 1;
    }
  });

  // return count + '\n';

  console.log(count);
}).join('');

// console.log(answer);