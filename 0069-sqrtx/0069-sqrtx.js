/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    
    let answer = 0;
    
    for (let i = 1; i <= x / 2; i++) {
        if (i * i > x) {
            break;
        }
        answer = i;
    }
    
    return answer;
};