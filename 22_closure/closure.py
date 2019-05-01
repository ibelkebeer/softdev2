def repeat(s):
    def make(x):
        return s * x
    return make

r1 = repeat('hello')
r2 = repeat('goodbye')

print(r1(2))
print(r2(2))
print(repeat('cool')(3))

def make_counter():
    x = 0
    def inc():
        nonlocal x
        x += 1
        return x
    return inc

ctr1 = make_counter()
print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())

def make_counter2():
    x = 0
    def inc():
        nonlocal x
        x += 1
        return x
    def get():
        return x
    return (inc, get)

ctr3 = make_counter2()
print(ctr3[0]())
print(ctr3[1]())
print(ctr3[0]())
print(ctr3[1]())
print(ctr3[0]())
