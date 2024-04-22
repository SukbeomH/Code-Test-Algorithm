def main(where):
    coordinate = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    dx = [-2, -2, 2, 2, -1, 1, -1, 1]
    dy = [1, -1, 1, -1, 2, 2, -2, -2]
    ix = coordinate.index(where[0])
    iy = coordinate.index(where[1])
    count = 0
    for move in range(8):
        tx = ix + dx[move]
        ty = iy + dy[move]
        if 1 <= tx <= 8 and 1 <= ty <= 8:
            count += 1
    return count
