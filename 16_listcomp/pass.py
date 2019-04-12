uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lc = "abcdefghijklmnopqrstuvwxyz"
nums = "0123456789"
symbs = ".?!&#,;:-_*"

def pass_check(pw):
    p = [1 if x in uc else 2 if x in nums else 3 if x in lc else 0 for x in pw]
    return 1 in p and 2 in p and 3 in p

def pass_rate(pw):
    rating = 0
    l = len(pw)
    while l > 5:
        rating += 1
        l -= 5
    lcc = sum([1 if x in lc else 0 for x in pw])
    ucc = sum([1 if x in uc else 0 for x in pw])
    numc = sum([1 if x in nums else 0 for x in pw])
    symbc = sum([1 if x in symbs else 0 for x in pw])
    if lcc > 0 and ucc > 0:
        rating += 2
    if numc > 0:
        rating += 1
        while numc > 3:
            rating += 1
            numc -= 2
    while symbc > 0:
        rating += 2
        symbc -= 2
    if rating > 10:
        rating = 10
    return rating
