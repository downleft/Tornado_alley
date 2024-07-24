DROP TABLE Tornado_data;

CREATE TABLE Tornado_data (
	index_name INT PRIMARY KEY,
	Year INT NOT NULL,
	Date DATE NOT NULL,
	State VARCHAR(255) NOT NULL,
	Rating VARCHAR(3) NOT NULL,
	Injuries INT NOT NULL,
	Death INT NOT NULL,
	Start_Lat FLOAT NOT NULL,
	Start_Lon FLOAT NOT NULL,
	Width INT NOT NULL
);

SELECT * FROM Tornado_data