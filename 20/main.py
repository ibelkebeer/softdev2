from functools import reduce

f = open("treasureisland.txt", 'r')
lines = f.read().split(' ')

#Find frequency of single word
def word_freq(s):
    x = 0
    def f(word,y):
        if word == s:
            x += 1
    reduce(f, lines)
    return x

print(word_freq("it"))
#Find total frequency of group of words

#Find most frequently occuring word
