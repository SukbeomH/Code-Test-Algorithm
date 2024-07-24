def solution(my_string, letter):
    ans = ""
    for ele in my_string:
        if ele != letter:
           ans += ele
        
    return ans