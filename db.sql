CREATE TABLE states
(
    id SERIAL PRIMARY KEY NOT NULL,
    statename VARCHAR(100) NOT NULL
);

CREATE TABLE person
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

CREATE TABLE visited
(
    id SERIAL PRIMARY KEY NOT NULL,
    personid INT NOT NULL REFERENCES person(id),
    stateid INT NOT NULL REFERENCES states(id)
);

-- data to populate states table
INSERT INTO states (statename) VALUES ('Alabama');
INSERT INTO states (statename) VALUES ('Alaska');
INSERT INTO states (statename) VALUES ('Arizona');
INSERT INTO states (statename) VALUES ('Arkansas');
INSERT INTO states (statename) VALUES ('California');
INSERT INTO states (statename) VALUES ('Colorado');
INSERT INTO states (statename) VALUES ('Connecticut');
INSERT INTO states (statename) VALUES ('Delaware');
INSERT INTO states (statename) VALUES ('Florida');
INSERT INTO states (statename) VALUES ('Georgia');
INSERT INTO states (statename) VALUES ('Hawaii');
INSERT INTO states (statename) VALUES ('Idaho');
INSERT INTO states (statename) VALUES ('Illinois');
INSERT INTO states (statename) VALUES ('Indiana');
INSERT INTO states (statename) VALUES ('Iowa');
INSERT INTO states (statename) VALUES ('Kansas');
INSERT INTO states (statename) VALUES ('Kentucky');
INSERT INTO states (statename) VALUES ('Louisiana');
INSERT INTO states (statename) VALUES ('Maine');
INSERT INTO states (statename) VALUES ('Maryland');
INSERT INTO states (statename) VALUES ('Massachusetts');
INSERT INTO states (statename) VALUES ('Michigan');
INSERT INTO states (statename) VALUES ('Minnesota');
INSERT INTO states (statename) VALUES ('Mississippi');
INSERT INTO states (statename) VALUES ('Missouri');
INSERT INTO states (statename) VALUES ('Montana');
INSERT INTO states (statename) VALUES ('Nebraska');
INSERT INTO states (statename) VALUES ('Nevada');
INSERT INTO states (statename) VALUES ('New Hampshire');
INSERT INTO states (statename) VALUES ('New Jersey');
INSERT INTO states (statename) VALUES ('New Mexico');
INSERT INTO states (statename) VALUES ('New York');
INSERT INTO states (statename) VALUES ('North Carolina');
INSERT INTO states (statename) VALUES ('North Dakota');
INSERT INTO states (statename) VALUES ('Ohio');
INSERT INTO states (statename) VALUES ('Oklahoma');
INSERT INTO states (statename) VALUES ('Oregon');
INSERT INTO states (statename) VALUES ('Pennsylvania');
INSERT INTO states (statename) VALUES ('Rhode Island');
INSERT INTO states (statename) VALUES ('South Carolina');
INSERT INTO states (statename) VALUES ('South Dakota');
INSERT INTO states (statename) VALUES ('Tennessee');
INSERT INTO states (statename) VALUES ('Texas');
INSERT INTO states (statename) VALUES ('Utah');
INSERT INTO states (statename) VALUES ('Vermont');
INSERT INTO states (statename) VALUES ('Virginia');
INSERT INTO states (statename) VALUES ('Washington');
INSERT INTO states (statename) VALUES ('West Virginia');
INSERT INTO states (statename) VALUES ('Wisconsin');
INSERT INTO states (statename) VALUES ('Wyoming');