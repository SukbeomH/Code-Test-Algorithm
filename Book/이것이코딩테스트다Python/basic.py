def example(num1, num2):
    array = [1, 2, 3, 4, 5]
    remove_set = {3, 5}

    result = [i for i in array if i not in remove_set]
    return result

print(example(1, 2)) # [1, 2, 4]

# 자료형
def type():
    a = 5
    b = 3.14
    c = 1 + 2j
    d = 'Hello, World!'
    e = True
    f = [1, 2, 3]
    g = (1, 2, 3)
    h = {1, 2, 3}
    i = {'name': 'Alice', 'age': 20}

    print(type(a)) # <class 'int'>
    print(type(b)) # <class 'float'>
    print(type(c)) # <class 'complex'>
    print(type(d)) # <class 'str'>
    print(type(e)) # <class 'bool'>
    print(type(f)) # <class 'list'>
    print(type(g)) # <class 'tuple'>
    print(type(h)) # <class 'set'>
    print(type(i)) # <class 'dict'>

# 숫자형_정수
def integer():
    a = 7
    b = -3
    c = 0

    print(a) # 7
    print(b) # -3
    print(c) # 0

# 숫자형_실수
def float():
    a = 3.14
    b = -1.23
    c = 0.0

    print(a) # 3.14
    print(b) # -1.23
    print(c) # 0.0

# 숫자형_복소수
def complex():
    a = 1 + 2j
    b = -3 - 4j

    print(a) # (1+2j)
    print(b) # (-3-4j)

# 문자열
def string():
    a = 'Hello, World!'
    b = "Hello, World!"
    c = '''Hello, World!'''
    d = """Hello, World!"""

    print(a) # Hello, World!
    print(b) # Hello, World!
    print(c) # Hello, World!
    print(d) # Hello, World!

# 리스트
def list_():
    a = [1, 2, 3, 4, 5]
    b = list(range(1, 6))

    print(a) # [1, 2, 3, 4, 5]
    print(b) # [1, 2, 3, 4, 5]

# 튜플
def tuple_():
    a = (1, 2, 3, 4, 5)
    b = tuple(range(1, 6))

    print(a) # (1, 2, 3, 4, 5)
    print(b) # (1, 2, 3, 4, 5)

# 집합
def set_():
    a = {1, 2, 3, 4, 5}
    b = set(range(1, 6))

    print(a) # {1, 2, 3, 4, 5}
    print(b) # {1, 2, 3, 4, 5}

# 사전
def dictionary():
    a = {'name': 'Alice', 'age': 20}
    b = dict(name='Alice', age=20)

    print(a) # {'name': 'Alice', 'age': 20}
    print(b) # {'name': 'Alice', 'age': 20}

# 연산자
def operator():
    a = 7
    b = 3

    print(a + b) # 10
    print(a - b) # 4
    print(a * b) # 21
    print(a / b) # 2.3333333333333335
    print(a // b) # 2
    print(a % b) # 1
    print(a ** b) # 343

# 비교 연산자
def comparison():
    a = 3
    b = 5

    print(a == b) # False
    print(a != b) # True
    print(a < b) # True
    print(a > b) # False
    print(a <= b) # True
    print(a >= b) # False

# 논리 연산자
def logical():
    a = True
    b = False

    print(a and b) # False
    print(a or b) # True
    print(not a) # False

# 식별 연산자
def identity():
    a = 3
    b = 3
    c = 4

    print(a is b) # True
    print(a is not c) # True

# 멤버 연산자
def membership():
    a = [1, 2, 3]
    b = {1, 2, 3}
    c = {'name': 'Alice', 'age': 20}

    print(1 in a) # True
    print(4 in a) # False
    print(1 not in b) # False
    print('name' in c) # True
    print('Alice' in c) # False

# 조건문
def if_statement():
    a = 10
    if a > 5:
        print('a is greater than 5')
    elif a == 5:
        print('a is 5')
    else:
        print('a is less than 5')

# 반복문
def for_statement():
    array = [1, 2, 3, 4, 5]
    for i in array:
        print(i)

# while문
def while_statement():
    i = 0
    while i < 5:
        print(i)
        i += 1

# 함수
def function():
    def add(a, b):
        return a + b

    print(add(3, 4)) # 7

# 클래스
def class_():
    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age

    person = Person('Alice', 20)
    print(person.name) # Alice
    print(person.age) # 20

# 예외 처리
def exception():
    try:
        a = 3 / 0
    except ZeroDivisionError as e:
        print(e) # division by zero

# 내장 함수
def built_in_function():
    a = [1, 2, 3, 4, 5]
    print(len(a)) # 5
    print(list(reversed(a))) # [5, 4, 3, 2, 1]
    print(sorted(a)) # [1, 2, 3, 4, 5]
    print(sum(a)) # 15
    print(max(a)) # 5
    print(min(a)) # 1
    print(abs(-3)) # 3
    print(pow(2, 3)) # 8
    print(divmod(7, 3)) # (2, 1)
    print(all([True, True, False])) # False
    print(any([True, True, False])) # True
    print(chr(65)) # A
    print(ord('A')) # 65
    print(str(3)) # 3
    print(int('3')) # 3
    print(float('3.14')) # 3.14
    print(type(a)) # <class 'list'>
    print(isinstance(a, list)) # True
    print(id(a)) # 140352132073280
    print(hex(16)) # 0x10
    print(oct(8)) # 0o10
    print(bin(2)) # 0b10
    print(round(3.14)) # 3
    # ...

