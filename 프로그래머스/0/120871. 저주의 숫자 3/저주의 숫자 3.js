function solution(n) {
    let temp = 0;
    
    for (let count = 0; count < n; count++) {
        let parse = [...String(temp)].includes('3');
        let multiply = temp % 3 === 0
        
        while (parse || multiply) {
            temp++;  
            parse = [...String(temp)].includes('3');
            multiply = temp % 3 === 0
        }
        temp++;
    }
    
    return temp - 1;
}