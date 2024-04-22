def main(n, data):
    x = 1
    y = 1
    for direction in data:
        if direction == "L" and x - 1 >= 1:
            x -= 1
        elif direction == "R" and x + 1 <= n:
            x += 1
        elif direction == "U" and y - 1 >= 1:
            y -= 1
        elif direction == "D" and y + 1 <= n:
            y += 1
        else:
            pass
    return x, y

def vector(n, data):
    x, y = 1, 1
    types = ["L", "R", "U", "D"]
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    for move in data:
        idx = types.index(move)
        tx = x + dx[idx]
        ty = y + dy[idx]
        if 1 <= tx <= n:
            x = tx
        if 1 <= ty <= n:
            y = ty
    return x, y
