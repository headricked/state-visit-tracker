const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
// console.log("db_url: " + db_url);
const pool = new Pool({ connectionString: db_url });


function getAllStates(callback) {
    // get all the states from the DB

    let sql1 = `SELECT id, statename FROM states`;
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
                ON visitedstate.personid = visited.personid
                WHERE visited.stateid = visitedstate.stateid
                AND visited.personid = 11;
            `;

    pool.query(sql4, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            // we received successful results from DB
            console.log("Back from the DB with:");
            console.log(db_results);

            let results = {
                states:db_results.rows
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