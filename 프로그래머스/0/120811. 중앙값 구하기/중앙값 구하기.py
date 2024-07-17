def solution(array):
    sort_arr = sorted(array)
    total_length = len(array)
    mid = int(total_length / 2)
    answer = sort_arr[mid]
    
    return answer