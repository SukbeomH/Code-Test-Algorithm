def by_myself(n):
    # n시 59분 59초까지의 3이 들어가는 모든 경우를 카운트
    count = 0
    # 시간을 돌며 카운트
    for h in range(n + 1):
        m = 0
        for m in range(60):
            s = 0
            for s in range(60):
                if h % 10 == 3 or h // 10 == 3:
                    count += 1
                elif m % 10 == 3 or m // 10 == 3:
                    count += 1
                elif s % 10 == 3 or s // 10 == 3:
                    count += 1
                s += 1
            m += 1
        h += 1
    return count
