function solution(n) {
    let numbers = [...String(n)].sort((a, b) => b - a).join('')
    
    return Number(numbers)
}