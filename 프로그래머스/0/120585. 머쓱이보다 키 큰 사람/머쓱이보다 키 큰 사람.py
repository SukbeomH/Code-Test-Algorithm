def solution(array, height):
    cnt = 0
    sorted_ = sorted(array)
    
    for i in sorted_:
        if i > height:
            cnt += 1
            
    return cnt
