function solution(n) {
    let arr = [];
    arr.length = n;
    let answer = "";
    
    for (let idx = 0; idx < arr.length; idx++) {
        if (idx % 2 === 0) {
            answer = answer + "수"
        } else {
            answer = answer + "박"
        }
    }
    
    return answer;
}