// require('fs').readFileSync('/dev/stdin')
// require('fs').readFileSync('testCase.txt')
const input = require('fs').readFileSync('testCase.txt').toString().split('\n')

const line = input;
const t = Number(line[0]);

let number = 0n;
let answer = '';
for (let i = 1; i <= t; i++) {
  const [a, b] = line[i].split(' ');
  number = BigInt(a) ** BigInt(b);
  answer += number % 10n + '\n';
}

console.log(answer);