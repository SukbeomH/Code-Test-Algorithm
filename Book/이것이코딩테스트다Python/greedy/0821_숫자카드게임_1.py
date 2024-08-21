n, m = map(int, input().split())

list = map(int, input().split())

smallest = 0

for row in range(m):
    list = map(int, input().split())
    if smallest < sorted(list, reverse=True)[0]:
        smallest = sorted(list, reverse=True)[0]

print(smallest)
