function solution(s) {
    let answer = [];
    
    [...s].forEach((ele, idx, arr) => {
        if (arr.indexOf(ele) === idx) {
            return answer.push(-1);
        } else {
            for (let i = 1; i <= idx; i++) {
                if (arr[idx - i] === ele) {
                    return answer.push(i);
                }
            }
        }
    })
    
    return answer;
}