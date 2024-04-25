n, m = map(int, input().split())
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

def dfs(x, y):
    if x < 0 or x > n or y < 0 or n > m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y - 1)
        dfs(x, y + 1)
        return True
    return False

def main():
    result = 0
    for j in range(n):
        for k in range(m):
            if dfs(j,k) is True:
                result += 1
    return result
