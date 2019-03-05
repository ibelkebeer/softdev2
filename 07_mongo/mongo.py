#Team YaThatWasABanana -- Dennis Chen, Imad Belkebir
#SoftDev2 pd7
#K07 -- Import/Export Bank
#2019-03-01

'''
The dataset we used was the pokedex json file containing information on all the 1st generation pokemon
https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
We imported the data by using the os libary to run the command that puts the information from the json
file into the database.
'''

import pymongo
import os

os.system("sudo mv pkmn.json ../../data/db")
os.system("mongoimport --db YaThatWasABanana --collection pkmn --drop --file ~/data/db/pkmn.json")
SERVER_ADDR = "206.81.13.98"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.YaThatWasABanana
collection = db.pkmn

#gets the list of all the pokemon and some of their info
pokemon = list(collection.find())[0]['pokemon']
names = {}
ids = {}
#for each pokemon, the name and id are coupled as key-value pairs in both ways
for pkmn in pokemon:
    name = pkmn['name'].encode('ascii','ignore')
    names[name] = pkmn['id']
    ids[pkmn['id']] = name

#returns the id given the name of the pokemon
def get_id_by_name(name):
    return names[name]

#returns the name given the id of the pokemon
def get_name_by_id(id):
    return ids[id]

print(getName(21))
print(getId("Pikachu"))
