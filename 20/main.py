from functools import reduce
import string

f = open("treasureisland.txt", 'r')
lines = f.read().splitlines()
for i in range(len(lines)):
    lines[i] = lines[i].split(' ')
    lines[i] = [x.lower() for x in lines[i] if x != '' and x != '.']
    for j in range(len(lines[i])):
        for c in string.punctuation:
            lines[i][j] = lines[i][j].replace(c,'')
temp = []
for line in lines:
    temp.extend(line)
lines = temp

#Find frequency of single word
def word_freq(s):
    return reduce(lambda x,y: 1 if x == s else 0, lines)

#print(word_freq('it'))
t = ['1','2','3']
def temp(x,y):
    print(x == '1')
    if x is '1':
        return 1
    else:
        return 0
print(reduce(temp, t))
#Find total frequency of group of words

#Find most frequently occuring word
