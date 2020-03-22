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

-- data to populate person table
INSERT INTO person (firstname, lastname) VALUES ('Alan', 'Alda');
INSERT INTO person (firstname, lastname) VALUES ('Bob', 'Barker');
INSERT INTO person (firstname, lastname) VALUES ('Charlie', 'Chapman');

-- data to populate visited table
INSERT INTO visited (personid, stateid) VALUES (1, 1);
INSERT INTO visited (personid, stateid) VALUES (1, 3);
INSERT INTO visited (personid, stateid) VALUES (1, 5);
INSERT INTO visited (personid, stateid) VALUES (2, 2);
INSERT INTO visited (personid, stateid) VALUES (2, 4);
INSERT INTO visited (personid, stateid) VALUES (3, 1);


-- milstones for user with person_id = 1
WITH visitedstate AS (
  SELECT * FROM visited
  INNER JOIN person
  ON person.id = visited.person_id
  WHERE person.id = 1)
 
 SELECT milestone_name, milestone_date, DATE_PART('year', milestone_date) - DATE_PART('year', birthdate)
  AS person_age, milestone_location, milestone_notes
  FROM theEvent;




-- TEST DATA
CREATE TABLE staff
(
    staff_id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO staff (first_name, last_name, email) VALUES ('Alan', 'Alda', 'aalda@email.com');
INSERT INTO staff (first_name, last_name, email) VALUES ('Bill', 'Brown', 'bbrown@email.com');
INSERT INTO staff (first_name, last_name, email) VALUES ('Charlie', 'Chapman', 'cchapman@email.com');

CREATE TABLE payment
(
    payment_id SERIAL PRIMARY KEY NOT NULL,
    customer_id INT REFERENCES customer(customer_id),
    staff_id INT REFERENCES staff(staff_id),
    amount INT,
    payment_date DATE
);

INSERT INTO payment (customer_id, staff_id, amount, payment_date) VALUES (1, 1, 100, '20200101');
INSERT INTO payment (customer_id, staff_id, amount, payment_date) VALUES (2, 2, 200, '20200202');
INSERT INTO payment (customer_id, staff_id, amount, payment_date) VALUES (3, 3, 300, '20200303');

CREATE TABLE customer
(
    customer_id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO customer (first_name, last_name, email) VALUES ('Doug', 'Dwyer', 'ddwyer@email.com');
INSERT INTO customer (first_name, last_name, email) VALUES ('Eli', 'Ellis', 'eellis@email.com');
INSERT INTO customer (first_name, last_name, email) VALUES ('Fred', 'Farr', 'ffarr@email.com');

-- JOINING THREE RELATED TABLES
SELECT
   customer.customer_id,
   customer.first_name customer_first_name,
   customer.last_name customer_last_name,
   customer.email,
   staff.first_name staff_first_name,
   staff.last_name staff_last_name,
   amount,
   payment_date
FROM
   customer
INNER JOIN payment ON payment.customer_id = customer.customer_id
INNER JOIN staff ON payment.staff_id = staff.staff_id;







-- TEST DATA
CREATE TABLE gente
(
    gente_id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

INSERT INTO gente (first_name, last_name) VALUES ('Alan', 'Alda');
INSERT INTO gente (first_name, last_name) VALUES ('Bill', 'Brown');
INSERT INTO gente (first_name, last_name) VALUES ('Charlie', 'Chapman');

CREATE TABLE visitado
(
    visitado_id SERIAL PRIMARY KEY NOT NULL,
    estado_id INT REFERENCES estado(estado_id),
    gente_id INT REFERENCES gente(gente_id)
);

INSERT INTO visitado (estado_id, gente_id) VALUES (1, 1);
INSERT INTO visitado (estado_id, gente_id) VALUES (2, 2);
INSERT INTO visitado (estado_id, gente_id) VALUES (3, 3);
INSERT INTO visitado (estado_id, gente_id) VALUES (1, 2);
INSERT INTO visitado (estado_id, gente_id) VALUES (1, 3);
INSERT INTO visitado (estado_id, gente_id) VALUES (2, 3);

CREATE TABLE estado
(
    estado_id SERIAL PRIMARY KEY NOT NULL,
    estado_name VARCHAR(100)
);

INSERT INTO estado (estado_name) VALUES ('Alabama');
INSERT INTO estado (estado_name) VALUES ('Alaska');
INSERT INTO estado (estado_name) VALUES ('Arizona');

-- JOINING THREE RELATED TABLES
SELECT
    visitado_id,
    gente.first_name gente_first_name,
    gente.last_name gente_last_name,
    estado.estado_id,
    estado.estado_name estado_name
FROM
    estado
INNER JOIN visitado ON visitado.estado_id = estado.estado_id
INNER JOIN gente ON visitado.gente_id = gente.gente_id;





-- more test data
CREATE TABLE persona
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    Alabama VARCHAR(100),
    Alaska VARCHAR(100),
    Arizona VARCHAR(100),
    Arkansas VARCHAR(100),
    California VARCHAR(100),
    Colorado VARCHAR(100),
    Connecticut VARCHAR(100),
    Delaware VARCHAR(100),
    Florida VARCHAR(100),
    Georgia VARCHAR(100),
    Hawaii VARCHAR(100),
    Idaho VARCHAR(100),
    Illinois VARCHAR(100),
    Indiana VARCHAR(100),
    Iowa VARCHAR(100),
    Kansas VARCHAR(100),
    Kentucky VARCHAR(100),
    Louisiana VARCHAR(100),
    Maine VARCHAR(100),
    Maryland VARCHAR(100),
    Massachusetts VARCHAR(100),
    Michigan VARCHAR(100),
    Minnesota VARCHAR(100),
    Mississippi VARCHAR(100),
    Missouri VARCHAR(100),
    Montana VARCHAR(100),
    Nebraska VARCHAR(100),
    Nevada VARCHAR(100),
    NewHampshire VARCHAR(100),
    NewJersey VARCHAR(100),
    NewMexico VARCHAR(100),
    NewYork VARCHAR(100),
    NorthCarolina VARCHAR(100),
    NorthDakota VARCHAR(100),
    Ohio VARCHAR(100),
    Oklahoma VARCHAR(100),
    Oregon VARCHAR(100),
    Pennsylvania VARCHAR(100),
    RhodeIsland VARCHAR(100),
    SouthCarolina VARCHAR(100),
    SouthDakota VARCHAR(100),
    Tennessee VARCHAR(100),
    Texas VARCHAR(100),
    Utah VARCHAR(100),
    Vermont VARCHAR(100),
    Virginia VARCHAR(100),
    Washington VARCHAR(100),
    WestVirginia VARCHAR(100),
    Wisconsin VARCHAR(100),
    Wyoming VARCHAR(100)
);

-- alan alda
INSERT INTO
    persona (
        firstname,
        lastname,
        Alabama,
        Alaska,
        Arizona,
        Arkansas,
        California,
        Colorado,
        Connecticut,
        Delaware,
        Florida,
        Georgia,
        Hawaii,
        Idaho,
        Illinois,
        Indiana,
        Iowa,
        Kansas,
        Kentucky,
        Louisiana,
        Maine,
        Maryland,
        Massachusetts,
        Michigan,
        Minnesota,
        Mississippi,
        Missouri,
        Montana,
        Nebraska,
        Nevada,
        NewHampshire,
        NewJersey,
        NewMexico,
        NewYork,
        NorthCarolina,
        NorthDakota,
        Ohio,
        Oklahoma,
        Oregon,
        Pennsylvania,
        RhodeIsland,
        SouthCarolina,
        SouthDakota,
        Tennessee,
        Texas,
        Utah,
        Vermont,
        Virginia,
        Washington,
        WestVirginia,
        Wisconsin,
        Wyoming
    )
VALUES (
    'Alan',
    'Alda',
    'checked',
    '',
    '',
    '',
    'checked',
    'checked',
    'checked',
    '',
    '',
    '',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    '',
    '',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    'checked',
    'checked'
);

-- bobby brown
INSERT INTO
    persona (
        firstname,
        lastname,
        Alabama,
        Alaska,
        Arizona,
        Arkansas,
        California,
        Colorado,
        Connecticut,
        Delaware,
        Florida,
        Georgia,
        Hawaii,
        Idaho,
        Illinois,
        Indiana,
        Iowa,
        Kansas,
        Kentucky,
        Louisiana,
        Maine,
        Maryland,
        Massachusetts,
        Michigan,
        Minnesota,
        Mississippi,
        Missouri,
        Montana,
        Nebraska,
        Nevada,
        NewHampshire,
        NewJersey,
        NewMexico,
        NewYork,
        NorthCarolina,
        NorthDakota,
        Ohio,
        Oklahoma,
        Oregon,
        Pennsylvania,
        RhodeIsland,
        SouthCarolina,
        SouthDakota,
        Tennessee,
        Texas,
        Utah,
        Vermont,
        Virginia,
        Washington,
        WestVirginia,
        Wisconsin,
        Wyoming
    )
VALUES (
    'Bobby',
    'Brown',
    '',
    'checked',
    'checked',
    'checked',
    '',
    '',
    '',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    '',
    'checked',
    '',
    'checked',
    'checked',
    '',
    '',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    'checked',
    'checked',
    'checked',
    '',
    'checked',
    '',
    'checked',
    'checked',
    '',
    'checked',
    '',
    'checked',
    '',
    '',
    '',
    'checked',
    '',
    'checked',
    '',
    'checked'
);
