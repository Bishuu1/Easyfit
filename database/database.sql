CREATE DATABASE IF NOT EXISTS Easy_fit;

USE Easy_fit;

CREATE TABLE UserPassword(
    username VARCHAR(16) NOT NULL
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE UserData(
    username_fk VARCHAR(16) NOT NULL,
    Name VARCHAR(255) DEFAULT NULL,
    Dateob VARCHAR(20) DEFAULT NULL, 
    SexualGender VARCHAR (15) DEFAULT NULL, 
    Email VARCHAR (255) DEFAULT NULL,
    PRIMARY KEY (username_fk),
    FOREIGN KEY (username_fk) REFERENCES UserPassword(username) ON DELETE CASCADE
);

CREATE TABLE UserPhysical(
    username_fk VARCHAR(16) NOT NULL,
    Weightkg INT (3) DEFAULT NULL,
    Heightcm INT (3) DEFAULT NULL,
    PRIMARY KEY (username_fk),
    FOREIGN KEY (username_fk) REFERENCES UserPassword(username) ON DELETE CASCADE
);

CREATE TABLE UserImc(
    username_fk VARCHAR(16) NOT NULL,
    IMC FLOAT (3) DEFAULT NULL,
    FatPercent FLOAT (3) DEFAULT NULL,
    PRIMARY KEY (username_fk),
    FOREIGN KEY (username_fk) REFERENCES UserPassword(username) ON DELETE CASCADE
);

CREATE TABLE Exercise(
    id INT (4) NOT NULL AUTO_INCREMENT, 
    Name VARCHAR(255) NOT NULL,
    Calories INT (4) NOT NULL,
    ExType VARCHAR (255) NOT NULL, 
    PRIMARY KEY (id)
);

CREATE TABLE Routine(
    id INT (10) NOT NULL AUTO_INCREMENT,
    Username_fk VARCHAR(16) NOT NULL,
    Id_fk INT(4) NOT NULL, 
    PRIMARY KEY (id),
    FOREIGN KEY (username_fk) REFERENCES UserPassword(username) ON DELETE CASCADE,
    FOREIGN KEY (Id_fk) REFERENCES Exercise(Id)
);

ALTER TABLE UserData
ADD UNIQUE (Email);





