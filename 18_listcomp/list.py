def py_triple(n):
    return [[x,y,z] for x in range(1,n) for y in range(x,n) for z in range(y,n) if x**2 + y**2 == z**2]

def quicksort(l):
    if len(l) > 0:
        return quicksort([x for x in l if x < l[0]]) + [x for x in l if x == l[0]] + quicksort([x for x in l if x > l[0]])
    return []

