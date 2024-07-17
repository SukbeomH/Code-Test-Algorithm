def solution(numer1, denom1, numer2, denom2):
    answer = []
    numer3 = numer1 * denom2 + numer2 * denom1
    denom3 = denom1 * denom2
    smaller = 0
    
    if numer3 <= denom3:
        smaller = numer3
    else:
        smaller = denom3
        
    numer4 = numer3
    denom4 = denom3
    if smaller >= 2:
        for i in range(2, smaller + 1):
            if numer3 % i == 0 and denom3 % i == 0:
                numer4 = numer3 / i
                denom4 = denom3 / i
                
    answer = [numer4, denom4]
    
    return answer