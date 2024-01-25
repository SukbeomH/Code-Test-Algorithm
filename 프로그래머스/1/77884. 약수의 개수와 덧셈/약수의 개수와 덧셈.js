function solution(left, right) {
    let answer = 0;
    
    for (let num = left; num <= right; num++) {
        const isSquare = 
              Math.sqrt(num) === Math.floor(Math.sqrt(num));
        
        if (isSquare) {
            answer = answer - num;
        } else {
            answer = answer + num;
        }
    }
    
    return answer;
}