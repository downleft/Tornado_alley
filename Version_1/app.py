# Import the dependencies.
import numpy as np
import datetime as dt


import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd

#################################################
# Database Setup
#################################################

# Pull postgreSQL credentials
user = 'postgres'
password = 'postgres'
host = 'localhost'
port = '5432'
database = 'tornado_alley'

# Establish connection string
connection_str = f"postgresql://{user}:{password}@{host}:{port}/{database}"

# Create engine using the ***insert correct name*** database file
engine = create_engine(connection_str)

# Declare a Base using `automap_base()`
Base = automap_base()

# Use the Base class to reflect the database tables
Base.prepare(autoload_with=engine)

# Assign the ***name needed*** class to a variable called `Measurement`
alldata = Base.classes.tornado_data

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app)

#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/<state><br/>"
        f"/api/v1.0/<year><br/>"
        f"/api/v1.0/<state>/<year><br/>"
        )

@app.route(f"/api/v1.0/<year>")
@cross_origin()
def data_pull(year):
    # Create a session
    session = Session(engine)

    # Select information to pull
    sel = [alldata.year, alldata.state, alldata.rating, alldata.injuries, alldata.death, alldata.start_lat, alldata.start_lon, alldata.width]

    #Return JSON data specific to the given start and year
    results = session.query(*sel).filter(alldata.year == year).all()

    #Close out the session
    session.close()
    chosen_data = []
    for calyear, givstate, rating, injuries, deaths, latitude, longitude, width in results:
        tornado_dict = {}
        tornado_dict["Year"] = calyear
        tornado_dict["State"] = givstate
        tornado_dict["Rating"] = rating
        tornado_dict["Injuries"] = injuries
        tornado_dict["Deaths"] = deaths
        tornado_dict["Latitude"] = latitude
        tornado_dict["Longitude"] = longitude
        tornado_dict["Width"] = width
        chosen_data.append(tornado_dict)

    return jsonify(chosen_data)
    

if __name__ == '__main__':
    app.run(debug=True)