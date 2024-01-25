function solution(n) {
    let numbers = [...String(n)]
    
    return Number(numbers.sort((a, b) => b - a).join(''))
}