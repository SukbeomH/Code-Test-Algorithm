const input = require('fs').readFileSync('/dev/stdin').toString();
const [money, head] = input.split(' ').map(BigInt);

const answer = (money / head).toString().split('.')[0];
const remain = (money % head).toString().split('.')[0];
console.log(answer);
console.log(remain);