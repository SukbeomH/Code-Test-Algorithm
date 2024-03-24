function solution(num, arr) {
  const t = Math.floor(m / k);
  const r = m % k;

  arr.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < m; i++) {
    answer = answer + arr[i] * t * k
  }

  return answer;
}