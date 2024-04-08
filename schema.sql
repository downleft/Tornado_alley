
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

CREATE TABLE Tornado_2022 (
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

2023_Tornado {
	Year int
	Date datetime
	State varchar
	Rating int
	Injuries int
	Death int
	Start_Lat int
	Start_Lon int
	End_Lat int
	End_Lon int
	Width int
}
