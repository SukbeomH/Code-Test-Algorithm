function solution(a, b) {
    let under = b;
    let upper = a;
    
    while(under % 2 === 0) {
        under = under / 2;
    }
    while(under % 5 === 0) {
        under = under / 5;
    }
    
    if (upper % under === 0) {
        return 1;
    } else {
        return 2;
    }
}