def make(f):
    m = {}
    def inner(x):
        if x in m:
            return m[x]
        m[x] = f(x)
        return m[x]
    return inner

@make
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return n
    return fib(n-1) + fib(n-2)

print(fib(10))
