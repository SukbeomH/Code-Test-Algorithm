/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let answer = true;
    const arr = [...String(x)];
    const rev = [...String(x)].reverse();

    arr.forEach((e, i) => {
        if (e !== rev[i]) {
            answer = false;
        }
    });
    return answer;
};