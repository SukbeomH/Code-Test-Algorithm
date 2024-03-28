/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    let lengths = [s1.length, s2.length, s3.length];
    let min = Math.min(...lengths);
    let cnt = 0;
    
    for (let i = 0; i < min; i ++) {
        if (s1[i] !== s2[i] || s2[i] !== s3[i] || s3[i] !== s1[i]) {
            if (i === 0) {
                return -1;
            }
            break;
        }
        cnt++;
    }
    
    return lengths[0] + lengths[1] + lengths[2] - cnt * 3;
};