def main():
    data = list(map(int, input().split))
    # 오름차순 정렬
    data.sort()
    # 총 그룹의 수
    result = 0
    # 그룹에 포함된 모험가의 수
    count = 0
    # 각 모험가의 공포도를 순회하며 그룹생성
    for i in data:
        count += 1 # 현재 모험가를 그룹에 추가
        # 그룹원의 수와 공포도를 비교
        if i <= count: # 그룹이 허용될 경우
            result += 1 # 그룹 추가
            count = 0 # 그룹 내 모험가 수 초기화
    return result
