function solution(dots) {
    const x = dots.map((ele) => ele[0])
    const y = dots.map((ele) => ele[1])
    const xWidth = Math.max(...x) - Math.min(...x);
    const yWidth = Math.max(...y) - Math.min(...y);
    
    return xWidth*yWidth
}