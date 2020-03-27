const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
// console.log("db_url: " + db_url);
const pool = new Pool({ connectionString: db_url });

let myId = 3;

function getAllStates(callback) {
    // get all the states from the DB

    let sql1 = `SELECT sid, statename FROM states`;
    let sql2 = `SELECT * FROM persona`;

    let sql3 = 
            `
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
            `;

    let sql4 =
            `
            WITH visitedstate AS (
                SELECT * FROM person
                CROSS JOIN states
              )
                
                SELECT * FROM visitedstate
                LEFT JOIN visited
                ON visitedstate.pid = visited.personid
                WHERE visited.stateid = visitedstate.sid
                AND visited.personid = 11
                ;
            `;

    let sql5 = {
        states: [
            { sid: 0, statename: "Alabama" },
            { sid: 1, statename: "Alaska" },
            { sid: 2, statename: "Arizona" },
            { sid: 3, statename: "Arkansas" },
            { sid: 4, statename: "California" },
            { sid: 5, statename: "Colorado" },
            { sid: 6, statename: "Connecticut" },
            { sid: 7, statename: "Delaware" },
            { sid: 8, statename: "Florida" },
            { sid: 9, statename: "Georgia" },
            { sid: 10, statename: "Hawaii" },
            { sid: 11, statename: "Idaho" },
            { sid: 12, statename: "Illinois" },
            { sid: 13, statename: "Indiana" },
            { sid: 14, statename: "Iowa" },
            { sid: 15, statename: "Kansas" },
            { sid: 16, statename: "Kentucky" },
            { sid: 17, statename: "Louisiana" },
            { sid: 18, statename: "Maine" },
            { sid: 19, statename: "Maryland" },
            { sid: 20, statename: "Massachusetts" },
            { sid: 21, statename: "Michigan" },
            { sid: 22, statename: "Minnesota" },
            { sid: 23, statename: "Mississippi" },
            { sid: 24, statename: "Missouri" },
            { sid: 25, statename: "Montana" },
            { sid: 26, statename: "Nebraska" },
            { sid: 27, statename: "Nevada" },
            { sid: 28, statename: "New Hampshire" },
            { sid: 29, statename: "New Jersey" },
            { sid: 30, statename: "New Mexico" },
            { sid: 31, statename: "New York" },
            { sid: 32, statename: "North Carolina" },
            { sid: 33, statename: "North Dakota" },
            { sid: 34, statename: "Ohio" },
            { sid: 35, statename: "Oklahoma" },
            { sid: 36, statename: "Oregon" },
            { sid: 37, statename: "Pennsylvania" },
            { sid: 38, statename: "Rhode Island" },
            { sid: 39, statename: "South Carolina" },
            { sid: 40, statename: "South Dakota" },
            { sid: 41, statename: "Tennessee" },
            { sid: 42, statename: "Texas" },
            { sid: 43, statename: "Utah" },
            { sid: 44, statename: "Vermont" },
            { sid: 45, statename: "Virginia" },
            { sid: 46, statename: "Washington" },
            { sid: 47, statename: "West Virginia" },
            { sid: 48, statename: "Wisconsin" },
            { sid: 49, statename: "Wyoming" }
        ],
        people: [
            { pid: 0, firstname: "Alan", lastname: "Alda"}
            // { pid: 2, firstname: "Bob", lastname: "Black"},
            // { pid: 3, firstname: "Chet", lastname: "Chan"}
        ],
        visited: [
            { vid: 0, personid: 0, stateid: 0},
            { vid: 1, personid: 0, stateid: 2},
            { vid: 2, personid: 0, stateid: 4},
            { vid: 3, personid: 0, stateid: 6},
            { vid: 4, personid: 0, stateid: 8},
            { vid: 5, personid: 0, stateid: 10},
            { vid: 6, personid: 0, stateid: 12},
            { vid: 7, personid: 0, stateid: 14},
            { vid: 8, personid: 0, stateid: 16},
            { vid: 9, personid: 0, stateid: 18},
            { vid: 10, personid: 0, stateid: 20},
            { vid: 11, personid: 0, stateid: 22},
            { vid: 12, personid: 0, stateid: 24},
            { vid: 13, personid: 0, stateid: 26},
            { vid: 14, personid: 0, stateid: 28},
            { vid: 15, personid: 0, stateid: 30},
            { vid: 16, personid: 0, stateid: 32},
            { vid: 17, personid: 0, stateid: 34},
            { vid: 18, personid: 0, stateid: 36},
            { vid: 19, personid: 0, stateid: 38},
            { vid: 20, personid: 0, stateid: 40},
            { vid: 21, personid: 0, stateid: 42},
            { vid: 22, personid: 0, stateid: 44},
            { vid: 23, personid: 0, stateid: 46},
            { vid: 24, personid: 0, stateid: 48}
        ]
    };

    let sql6 = `
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
                        WHERE visitedstate.personid = ${myId}
                    )
                    
                    SELECT 
                    *, CASE
                        WHEN visitedid IS NULL
                        THEN FALSE
                        ELSE TRUE
                        END AS isvisited
                        FROM statesvisited;
                `;

    // console.log('sql5:');
    // console.log(sql5);

    // callback(null, sql5); // for testing purposes because not making a query to database


    pool.query(sql6, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            // we received successful results from DB
            console.log("Back from the DB with:");
            console.log(db_results);

            let results = {
                // states:db_results.rows
                statesvisited:db_results.rows
            };
            callback(null, results);
        }
    });

}

function loadStates(state, callback) {
    console.log("Searching the DB for topic: " + state);

    let results = {
        list: [
            {
                id: 1,
                state: state
            },
            {
                id: 2,
                state: state
            },
            {
                id: 3,
                state: state
            }
        ]
    };
    callback(null, results);
}



function getStateById(id, callback) {
    // get the state from the DB that matdches that id
    let result = { id: 1, name: "hope" };
    callback(null, result);
}

function insertNewState(name, callback) {
    // create the new state in the DB with the provided name
    let results = { success: true };
    callback(null, results);
}

module.exports = {
    getAllStates: getAllStates,
    loadStates: loadStates,
    getStateById: getStateById,
    insertNewState: insertNewState
}