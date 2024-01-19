function solution(n, control) {
    const ctrlArr = [...control];
    let result =
        ctrlArr.reduce((acc, flag) => {
            if (flag === 'w') return acc = acc + 1;
            if (flag === 's') return acc = acc - 1;
            if (flag === 'd') return acc = acc + 10;
            if (flag === 'a') return acc = acc - 10;
            
        }, n)
    
    return result;
}