def solution(num_list):
    ans = [0, 0]
    for num in num_list:
        if num % 2 == 0:
            ans[0] += 1
        else:
            ans[1] += 1
    
    return ans