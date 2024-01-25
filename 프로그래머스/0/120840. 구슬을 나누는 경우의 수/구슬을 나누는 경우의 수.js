function solution(balls, share) {
    let tempBalls = 1;
    let tempShares = 1;
    
    for(let time = 0; time < share; time++) {
        tempBalls = tempBalls * (balls - time)
        tempShares = tempShares * (share - time)
    }
    
    return tempBalls / tempShares;
}