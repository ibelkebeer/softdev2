# mikey_g -- Jason Tung & Imad Belkebir
#
# SoftDev2 pd7
#
# K #19: Ready, Set, Math!
#
# 2019-04-16

s1 = {1,2,3}
s2 = {2,3,4}

#Union
def union(s1,s2):
    return {k for k in [k for k in s1] + [k for k in s2]}

#Intersection
def intersect(s1,s2):
    return {k for k in s1 if k in s2}

#Set Difference
def set_diff(s1,s2):
    return {k for k in s1 if k not in s2}

#Symmetric Difference
def symmetric_diff(s1,s2):
    return union(set_diff(s1,s2),(set_diff(s2,s1)))

#Cartesian Product
def cartesian_product(s1,s2):
    return {(j,k) for j in s1 for k in s2}

