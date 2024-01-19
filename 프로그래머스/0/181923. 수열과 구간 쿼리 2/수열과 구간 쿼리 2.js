function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([s, e, k]) => {
        let temp = [];
        for (let idx = s; idx <= e; idx++) {
            if(arr[idx] > k) {
                temp.push(arr[idx]);
            }
        }
        if (!temp.length) return answer.push(-1);
        temp.sort((a, b) => a - b);
        answer.push(temp[0]);
    })
    
    return answer;
}