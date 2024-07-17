import collections

def solution(array):
    cnt = collections.Counter(array)
    common = cnt.most_common(2)
    
    if len(common) == 1:
        return common[0][0]
    
    if common[0][1] == common[1][1]:
        return -1
    return common[0][0]