def main():
    change = input(int())
    coin_types = [500, 100, 50, 10]
    count = 0
    # 큰 단위의 화폐 순으로 정렬 되어있다면
    for coin in coin_types:
        # 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기 (몫을 구한다)
        count = count + (change // coin)
        # 남은 금액으로 다시 거슬러 줘야할 금액을 계산
        change = change % coin
    return count

print(main())
