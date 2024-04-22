def main(string):
    char = []
    num = 0
    for s in string:
        if s.isalpha():
            char.append(s)
        else:
            num += int(s)
    char.sort()
    if num != 0:
        char.append(str(num))
    return ''.join(char)
