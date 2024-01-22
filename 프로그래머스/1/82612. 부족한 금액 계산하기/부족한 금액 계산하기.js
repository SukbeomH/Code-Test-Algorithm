function solution(price, money, count) {
    // price + 2*price + ... + n*price = price(n(n+1)/2)
    const total = price * (count * (count + 1) / 2);
    const rest = money - total;
    
    console.log(total)
    if (rest > 0) {
        return 0;
    } else {
        return Math.abs(rest);
    }
}