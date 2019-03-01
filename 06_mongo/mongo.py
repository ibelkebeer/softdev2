import pymongo

SERVER_ADDR = "206.81.13.98"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def get_borough(b):
    return collection.find({'borough': b})

def get_zip(zip):
    return collection.find({'address.zipcode': zip})

def get_zip_grade(zip, g):
    return collection.find({'address.zipcode': zip, 'grades.grade': g})

def get_zip_score(zip, s):
    return collection.find({'address.zipcode': zip, 'grades.score': {'$lt': s}})
