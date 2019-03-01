#Team YaThatWasABanana --
import pymongo
import os

os.system("sudo mv pkmn.json ../../data/db")
os.system("mongoimport --db YaThatWasABanana --collection pkmn --drop --file ../../data/db/pkmn.json")
os.system("mongod -v --bind_ip_all --noauth --dbpath ~/data/db")
SERVER_ADDR = "206.81.13.98"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.YaThatWasABanana
collection = db.pkmn
