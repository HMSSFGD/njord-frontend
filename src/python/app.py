import os
import collections
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from flask import Flask, request #, json, jsonify


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    # ...
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

# run to set up db:
# flask db init
# flask db migrate -m "message" ?
# flask db upgrade


# __init__


app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)


# models

class Pin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)


    def __repr__(self):
        return '<Pin {}>'.format(self.id)

    def addPin(self):
        try:
            db.session.add(self)
            db.session.commit()
            return True
        except:
            return False

    def deletePin(self):
        try:
            db.session.delete(self)
            db.session.commit()
            return True
        except:
            return False



# the api/resource

# all classes need a OPTIONS request type return,
# since axios sends an OPTIONS request before each
# 'actual' request. doesn't need a response.

# anything below will not write to the database directly
# only read. Only the Models' methods above should write
api = Api(app)

# required to allow requests from axios
CORS(app)

class Trees(Resource):
    def post(self):
        requestData = request.json

        newPin = Pin(latitude = requestData['latitude'],
        longitude = requestData['longitude'])

        if(newPin.addPin()):
            return {'message': 'Pin added!'}, 201
        else:
            return {'message': 'Unable to add pin :('}, 418

    def get(self):
        # requestData = request.args
        pinsRaw = Pin.query.order_by(Pin.id.desc())

        if(pinsRaw == None):
            return {'message': 'not found :/'}, 404

        pins = collections.deque()
        for pin in pinsRaw:
            pinJSON = {}
            pinJSON['id'] = pin.id
            pinJSON['longitude'] = pin.longitude
            pinJSON['latitude'] = pin.latitude
            pins.append(pinJSON)

        return {'pins': list(pins)}, 200

    def options(self):
        return


api.add_resource(Trees, '/trees')

if __name__ == "__main__":
    app.run(debug=True)
