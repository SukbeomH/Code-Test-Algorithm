function solution(score) {
    let grade = []
    
    score
        .map((ele) => {
        const avg = (ele[0] + ele[1]) / 2;
        
        return avg;
        })
        .forEach((ele, idx, arr) => {
            grade[idx] = 1;
            arr.forEach((e, i, a) => {
                if (e > ele) {
                    grade[idx]++;
                }
            });
        });
    
    
    return grade;
}