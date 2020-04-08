CREATE TABLE states
(
    stateid SERIAL PRIMARY KEY NOT NULL,
    statename VARCHAR(100) NOT NULL
);

CREATE TABLE person
(
    personid SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

CREATE TABLE visited
(
    visitedid SERIAL PRIMARY KEY NOT NULL,
    personid INT NOT NULL REFERENCES person(personid),
    stateid INT NOT NULL REFERENCES states(stateid)
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

-- data to populate person table
INSERT INTO person (firstname, lastname) VALUES ('Alan', 'Alda');
INSERT INTO person (firstname, lastname) VALUES ('Bob', 'Black');
INSERT INTO person (firstname, lastname) VALUES ('Chet', 'Chan');
INSERT INTO person (firstname, lastname) VALUES ('Doug', 'Dahl');
INSERT INTO person (firstname, lastname) VALUES ('Ernie', 'Els');
INSERT INTO person (firstname, lastname) VALUES ('Fred', 'Flyn');
INSERT INTO person (firstname, lastname) VALUES ('Gus', 'Golic');
INSERT INTO person (firstname, lastname) VALUES ('Hal', 'Hanks');
INSERT INTO person (firstname, lastname) VALUES ('Igor', 'Ives');
INSERT INTO person (firstname, lastname) VALUES ('Jay', 'Jones');
INSERT INTO person (firstname, lastname) VALUES ('Kip', 'Keane');

-- data to populate visited table
INSERT INTO visited (personid, stateid) VALUES (1, 35);
INSERT INTO visited (personid, stateid) VALUES (1, 3);
INSERT INTO visited (personid, stateid) VALUES (1, 5);
INSERT INTO visited (personid, stateid) VALUES (2, 2);
INSERT INTO visited (personid, stateid) VALUES (2, 4);
INSERT INTO visited (personid, stateid) VALUES (3, 21);
INSERT INTO visited (personid, stateid) VALUES (4, 49);
INSERT INTO visited (personid, stateid) VALUES (5, 1);
INSERT INTO visited (personid, stateid) VALUES (5, 5);
INSERT INTO visited (personid, stateid) VALUES (5, 10);
INSERT INTO visited (personid, stateid) VALUES (5, 35);
INSERT INTO visited (personid, stateid) VALUES (5, 50);
INSERT INTO visited (personid, stateid) VALUES (11, 11);

--  THE QUERY
WITH visitedstate AS (
  SELECT * FROM person
  CROSS JOIN states
)
  
  SELECT
  	visitedstate.pid,
    visitedstate.sid,
  	-- visitedstate.firstname,
    -- visitedstate.lastname,
    -- visitedstate.statename,
    vid
    -- personid,
    -- stateid
  FROM visitedstate
  LEFT JOIN visited
  -- LEFT OUTER JOIN visited
  -- ON visitedstate.pid = visited.personid
  ON visitedstate.sid = visited.stateid
  -- WHERE visited.stateid = visitedstate.sid
  -- WHERE visited.stateid IS NOT NULL
  -- AND visited.personid = 11
;






--  THIS WORKS
    WITH visitedstate AS (
      SELECT * FROM person
      CROSS JOIN states
    ),
    
    a as(
      SELECT visitedstate.personid, 
      firstname, lastname, visited.stateid,
      statename,
      visitedid
      FROM visitedstate
       LEFT JOIN visited
       ON visitedstate.personid = visited.personid
       and visited.stateid = visitedstate.stateid
    )
    
    select 
    *, CASE WHEN visitedid is null THEN false ELSE true END as isvisited
    from a 
    
    ;

-- test query for user 5
WITH visitedstate AS (
      SELECT * FROM person
      CROSS JOIN states
    ),
    
    statesvisited AS(
      SELECT
      	visitedid,
      	visitedstate.stateid,
      	statename
      FROM visitedstate
       LEFT JOIN visited
       ON visitedstate.personid = visited.personid
       AND visited.stateid = visitedstate.stateid
      WHERE visitedstate.personid = 5
    )
    
    SELECT 
    *, CASE
    	WHEN visitedid IS NULL
        THEN FALSE
        ELSE TRUE
        END AS isvisited
        FROM statesvisited
;

-- INSERTION STATEMENT - USE FOR WHEN CHECKBOX IS CHANGED TO 'CHECKED'
INSERT INTO visited (personid, stateid) VALUES (5, 10);

-- DELETION STATEMENT - USE FOR WHEN CHECKBOX IS CHANGED TO 'UNCHECKED'
DELETE FROM visited WHERE stateid = 10 AND personid = 5;