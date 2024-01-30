function solution(brown, yellow) {
    const space = brown + yellow;
    
    for (let y = 1; y <= yellow; y++){
        const bWidth = y + 2;
        const bHeight = (yellow / y) + 2;
        
        if (bWidth * bHeight === space) {
            return [bWidth, bHeight].sort((a, b) => b - a);
        }
    }
}