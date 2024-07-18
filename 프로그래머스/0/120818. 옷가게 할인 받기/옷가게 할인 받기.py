def solution(price):
    if price >= 500000:
        return int(price*.8)
    if price >= 300000:
        return int(price*.9)
    if price >= 100000:
        return int(price*.95)
    
    return int(price)