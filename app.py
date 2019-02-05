from flask import Flask, render_template
from flask import jsonify
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
# import grovepi 
import json
import csv
import time
import datetime
import random

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def send_something():
    voltage = random.randint(1,21)*5
    current = random.randint(1,10)*2
    data = {
    "voltage_reading" : voltage,
    "current reading" : current
    }

@app.route('/')
def index():
    return render_template('index1.html')



@app.route('/watch')
@cross_origin()
def watch():
    data = send_something()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == "__main__":
    app.run(host='localhost', port=8080, debug=True)