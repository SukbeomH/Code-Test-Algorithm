function solution(numLog) {
    let log = [];
    
    numLog.map((ele, idx, arr) => {
        const diff = arr[idx + 1] - ele;
        
        if (diff === 1) return log.push('w')
        if (diff === -1) return log.push('s')
        if (diff === 10) return log.push('d')
        if (diff === -10) return log.push('a')
    });
    
    return log.join('')
}