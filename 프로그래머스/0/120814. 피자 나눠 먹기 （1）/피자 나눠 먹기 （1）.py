def solution(n):
    for i in range(1, n + 1):
        if i*7//n >= 1:
            return i
        