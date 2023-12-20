// require('fs').readFileSync('/dev/stdin')
// require('fs').readFileSync('solving/testCase.txt')
const input = require('fs').readFileSync('temp/boj_12865/testCase.txt').toString();
const lines = input.split('\n');
const nk = lines[0].split(' ');
const n = Number(nk[0]);
const k = Number(nk[1]);

const items = lines.slice(1).map((line) => {
  const [w, v] = line.split(' ').map(Number);

  return { w, v };
});

let answer = 0;
let remain = k;

// 무게의 합이 k를 넘지 않는 모든 조합을 구한다.
while (remain >= 0) {
  const sum = items.reduce((acc, cur) => {
    if (cur.w <= remain) {
      return acc + cur.v;
    }
    return acc;
  }, 0);

  answer = Math.max(answer, sum);
  remain -= 1;
}

console.log(answer);