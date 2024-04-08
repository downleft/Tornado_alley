# Import the dependencies.
import numpy as np
import datetime as dt


import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
import pandas as pd

#################################################
# Database Setup
#################################################

# Create engine using the ***insert correct name*** database file
engine = create_engine("sqlite:///Resources/hawaii.sqlite")

# Declare a Base using `automap_base()`
Base = automap_base()

# Use the Base class to reflect the database tables
Base.prepare(autoload_with=engine)

# Assign the ***name needed*** class to a variable called `Measurement`
Measurement = Base.classes.measurement

# Create a session
session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

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

@app.route(f"/api/v1.0/<state>/<year><br/>")
def data_pull(start, year):
    "Return JSON data specific to the given start and year"
    

#Close out the session
session.close()

if __name__ == '__main__':
    app.run(debug=True)