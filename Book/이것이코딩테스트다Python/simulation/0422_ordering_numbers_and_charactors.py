def main(str):
    char = ""
    num = 0
    for s in str:
        if type(int(s)) is not type(0):
            char = char + s
        else:
            num += int(s)
    return char + num
