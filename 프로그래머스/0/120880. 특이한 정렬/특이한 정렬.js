function solution(numlist, n) {
    const sort = numlist.sort((a, b) => {
        const distance = Math.abs(n - a) - Math.abs(b - n);
        
        if (distance === 0) {
            return b - a;
        } else {
            return distance;
        }
    });
    
    return sort
}