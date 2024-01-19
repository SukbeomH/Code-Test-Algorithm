function solution(my_string, s, e) {
    const strArr = [...my_string];
    const length = strArr.length;
    let modified = [];
    
    for (let idx = 0; idx < s; idx++) {
        modified.push(strArr[idx]);
    }
    for (let idx = e; idx >= s; idx--) {
        modified.push(strArr[idx]);
    }
    for (let idx = e + 1; idx < length; idx++) {
        modified.push(strArr[idx]);
    }
    
    return modified.join('')
}