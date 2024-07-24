def solution(my_string, n):
    ans = ""
    
    for ele in my_string:
        ans += ele * n
    
    return ans