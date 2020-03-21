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

-- data to populate us_states table
INSERT INTO us_states (stateName) VALUES ('Alabama');

INSERT INTO us_states (stateName) VALUES ('Alaska');

INSERT INTO us_states (stateName) VALUES ('Arizona');

INSERT INTO us_states (stateName) VALUES ('Arkansas');

INSERT INTO us_states (stateName) VALUES ('California');

INSERT INTO us_states (stateName) VALUES ('Colorado');

INSERT INTO us_states (stateName) VALUES ('Connecticut');

INSERT INTO us_states (stateName) VALUES ('Delaware');

INSERT INTO us_states (stateName) VALUES ('Florida');

INSERT INTO us_states (stateName) VALUES ('Georgia');

INSERT INTO us_states (stateName) VALUES ('Hawaii');

INSERT INTO us_states (stateName) VALUES ('Idaho');

INSERT INTO us_states (stateName) VALUES ('Illinois');

INSERT INTO us_states (stateName) VALUES ('Indiana');

INSERT INTO us_states (stateName) VALUES ('Iowa');

INSERT INTO us_states (stateName) VALUES ('Kansas');

INSERT INTO us_states (stateName) VALUES ('Kentucky');

INSERT INTO us_states (stateName) VALUES ('Louisiana');

INSERT INTO us_states (stateName) VALUES ('Maine');

INSERT INTO us_states (stateName) VALUES ('Maryland');

INSERT INTO us_states (stateName) VALUES ('Massachusetts');

INSERT INTO us_states (stateName) VALUES ('Michigan');

INSERT INTO us_states (stateName) VALUES ('Minnesota');

INSERT INTO us_states (stateName) VALUES ('Mississippi');

INSERT INTO us_states (stateName) VALUES ('Missouri');

INSERT INTO us_states (stateName) VALUES ('Montana');

INSERT INTO us_states (stateName) VALUES ('Nebraska');

INSERT INTO us_states (stateName) VALUES ('Nevada');

INSERT INTO us_states (stateName) VALUES ('New Hampshire');

INSERT INTO us_states (stateName) VALUES ('New Jersey');

INSERT INTO us_states (stateName) VALUES ('New Mexico');

INSERT INTO us_states (stateName) VALUES ('New York');

INSERT INTO us_states (stateName) VALUES ('North Carolina');

INSERT INTO us_states (stateName) VALUES ('North Dakota');

INSERT INTO us_states (stateName) VALUES ('Ohio');

INSERT INTO us_states (stateName) VALUES ('Oklahoma');

INSERT INTO us_states (stateName) VALUES ('Oregon');

INSERT INTO us_states (stateName) VALUES ('Pennsylvania');

INSERT INTO us_states (stateName) VALUES ('Rhode Island');

INSERT INTO us_states (stateName) VALUES ('South Carolina');

INSERT INTO us_states (stateName) VALUES ('South Dakota');

INSERT INTO us_states (stateName) VALUES ('Tennessee');

INSERT INTO us_states (stateName) VALUES ('Texas');

INSERT INTO us_states (stateName) VALUES ('Utah');

INSERT INTO us_states (stateName) VALUES ('Vermont');

INSERT INTO us_states (stateName) VALUES ('Virginia');

INSERT INTO us_states (stateName) VALUES ('Washington');

INSERT INTO us_states (stateName) VALUES ('Washington DC');

INSERT INTO us_states (stateName) VALUES ('West Virginia');

INSERT INTO us_states (stateName) VALUES ('Wisconsin');

INSERT INTO us_states (stateName) VALUES ('Wyoming');

