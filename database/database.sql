CREATE DATABASE IF NOT EXISTS Easy_fit;

USE Easy_fit;

CREATE TABLE UserPassword(
    username VARCHAR(16) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE UserData(
    username_fk VARCHAR(16) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Dateob DATE, 
    Sexgender VARCHAR (15) NOT NULL, 
    Email VARCHAR (255) NOT NULL,
    PRIMARY KEY (username_fk),
    FOREIGN KEY (username_fk) REFERENCES UserPassword(username) 
);

CREATE TABLE UserPhysical(
    username_fk VARCHAR(16) NOT NULL,
    Weightkg INT (3) NOT NULL,
    Heightcm INT (3) NOT NULL,
    PRIMARY KEY (username_fk),
    FOREIGN KEY (username_fk) REFERENCES UserPassword(username)
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
    FOREIGN KEY (username_fk) REFERENCES UserPassword(username),
    FOREIGN KEY (Id_fk) REFERENCES Exercise(Id)
);
