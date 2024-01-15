function solution(s){
    const arr = [...s];
    let pair = 0;
    
    if (arr.length % 2 !== 0){
        return false;
    }
    
    for (let e of arr) {
        if (e === '('){
            pair++;
        } else {
            pair--;
            if (pair < 0) {
                break;
            }
        }
    }
    if (pair !== 0) {
        return false;
    }
    return true;
}