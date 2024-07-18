def solution(money):
    cnt = money // 5500
    change = money - (5500 * cnt)
    
    return [cnt, change]