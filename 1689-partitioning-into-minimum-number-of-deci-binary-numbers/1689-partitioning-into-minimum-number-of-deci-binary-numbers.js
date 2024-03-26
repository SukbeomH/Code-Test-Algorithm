/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let answer = 0;

    for (let i = 0; i < n.length; i ++) {
        if (Number(n[i]) > answer) {
            answer = Number(n[i]);
        }
    }

    return answer;
};