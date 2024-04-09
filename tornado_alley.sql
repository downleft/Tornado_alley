DROP TABLE Tornado_data;

CREATE TABLE Tornado_data (
	index_name INT PRIMARY KEY,
	Year INT NOT NULL,
	Date DATE NOT NULL,
	State VARCHAR(255) NOT NULL,
	Rating INT NOT NULL,
	Injuries INT NOT NULL,
	Death INT NOT NULL,
	Start_Lat INT NOT NULL,
	Start_Lon INT NOT NULL,
	End_Lat INT NOT NULL,
	End_Lon INT NOT NULL,
	Width INT NOT NULL
);
SELECT * FROM Tornado_data
