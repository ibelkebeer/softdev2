#Team YaThatWasABanana -- 



import pymongo
import os

os.system("mv pkmn.json ../../data/db")
os.system("mongod -v --bind_ip_all --noauth --dbpath ../../data/db")
os.system("mongoimport --db YaThatWasABanana --collection pkmn --drop --file ../../data/db/pkmn.json")
SERVER_ADDR = "206.81.13.98"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.YaThatWasABanana
collection = db.pkmn