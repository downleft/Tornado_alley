
Project_3
# # Tornado_alley Project

This project aims to analyze tornado data over the past 50 years to determine if there have been any shifts in tornado alley and to examine changes in tornado intensity.

## Overview

The analysis is 

1. **Tornado Alley Shift Analysis:** Utilizing tornado data by year, we aim to visualize the geographical distribution of tornado occurrences to determine if there has been a shift in tornado alley over the past 50 years.

2. **Tornado Intensity Analysis:** We will explore changes in tornado intensity over time using various charts and statistical methods.

## Tools and Technologies

- HTML
- JavaScript
- Leaflet for interactive mapping
- Seaborn for statistical visualization
- Flask
- Postgres
- Python

## Data Source

The tornado data used in this analysis is sourced from two main datasets:

1. [National Centers for Environmental Information (NCEI)](https://www.ncdc.noaa.gov/data-access/storm-event-data): The dataset used is the "Storm Events Database" provided by NCEI.

2. [Kaggle - US Tornado Dataset 1950-2021](https://www.kaggle.com/datasets/danbraswell/us-tornado-dataset-1950-2021): This dataset contains tornado data for the United States from 1950 to 2021.

## Usage

To recreate the analysis:

1. Clone this repository to your local machine.
2. In PostgreSQL, create a database entitled "tornado_alley"
3. Within the "tornado_alley" database, use the tornado_alley.sql file to create a table named "tornado_data"
4. Import the merged_data.csv file to the "tornado_data" table just created in PostgreSQL
5. Open the app.py file and put your username and password in lines 20 and 21 to access the PostgreSQL database.
6. From the dev environment of your device's terminal/gitbash, start up the app.py file so the Flask API can access the database.
- You may need to do a pip install of flask_cors and psycopg2 in order for the Flask API to work properly.
7. In the terminal/gitbash, spin up a local server from the main repository folder so that you can view the maps and the interactive dashboard in your browser.

## Results

### Tornado Alley Shift Analysis
In viewing the maps, we can see that that is an increase of tornado occurrences across multiple states.  As such, it appears that tornado alley is spreading rather than shifting.

### Tornado Intensity Analysis
Over the past 45 years, it appears that there has been an increase in the occurrence of tornadoes of lower magnitude.
