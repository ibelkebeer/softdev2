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
words = []
for line in lines:
    words.extend(line)

#Find frequency of single word
def word_freq(s):
    return sum([1 for x in words if x == s.lower()])

#Find total frequency of group of words
def group_freq(s):
    phrase = s
    s = s.split(' ')
    if len(s) == 1:
        return word_freq(s)
    temp = [reduce(lambda x,y: x + ' ' + y, words[i:i + len(s)]) for i in range(len(words) - len(s) + 1)]
    return sum([1 for x in temp if x == phrase.lower()])

#Find most frequently occuring word
def most_freq():
    freq = {}
    for x in words:
        if x in freq:
            freq[x] += 1
        else:
            freq[x] = 1
    max = 0
    s = ""
    for x in freq.keys():
        if freq[x] > max:
            max = freq[x]
            s = x
    return s
