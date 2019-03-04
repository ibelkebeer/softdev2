#Team YaThatWasABanana -- Dennis Chen, Imad Belkebir
#SoftDev2 pd7
#K07 -- Import/Export Bank
#2019-03-01

import pymongo
import os

os.system("sudo mv pkmn.json ../../data/db")
os.system("mongoimport --db YaThatWasABanana --collection pkmn --drop --file ~/data/db/pkmn.json")
SERVER_ADDR = "206.81.13.98"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.YaThatWasABanana
collection = db.pkmn

pokemon = list(collection.find())[0]['pokemon']
names = []
for pkmn in pokemon:
    names.append(pkmn['name'].encode("ascii"))
print(names)
