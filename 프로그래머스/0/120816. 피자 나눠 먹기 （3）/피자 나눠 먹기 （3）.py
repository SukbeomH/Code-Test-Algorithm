def solution(slice, n):
    for i in range(1, n + 1):
        if (i * slice) // n >= 1:
            return i
        