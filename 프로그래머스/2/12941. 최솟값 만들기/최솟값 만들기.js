function solution(A,B){
    let answer = 0;
    const aArr = A.sort((a, b) => a - b);
    const bArr = B.sort((a, b) => b - a);
    
    for(let idx = 0; idx < A.length; idx++) {
        answer = answer + (aArr[idx] * bArr[idx]);
    }
    
    return answer;
}