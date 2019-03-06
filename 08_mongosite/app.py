#
#
#
#

from flask import Flask, render_template, request
app = Flask(__name__)

import pymongo
import json

SERVER_ADDR = ""
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.
collection=db.senators

@app.route("/")
def root(METHODS = ["GET","POST"]):
    

if __name__ == "__main__":
    app.debug = True
    app.run();
