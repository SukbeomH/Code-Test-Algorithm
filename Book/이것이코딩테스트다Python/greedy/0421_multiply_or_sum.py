# def main():
#     nums = map(int, input())
#     result = 0
#     # 연산에 0 혹은 1이 포함되는지 여부를 확인
#     # 첫번째 연산을 진행 (0 혹은 1이 있으면 더하기, 없으면 곱하기)
#     # 두번째 연산부터 연산 대상이 0 혹은 1이면 더하기, 아니면 곱하기로 쭉 진행
#     # result 반환

def main():
    data = input()
    result = int(data[0])
    for i in range(1, len(data)):
        num = int(data[i])
        if num <= 1 or result <= 1:
            result = result + num
        else:
            result = result * num
    return print(result)
