const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
// console.log("db_url: " + db_url);
const pool = new Pool({ connectionString: db_url });


function getAllStates(callback) {
    // get all the states from the DB

    let sql = `SELECT id, statename FROM states`;

    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            // we received successful results from DB
            // console.log("Back from the DB with:");
            // console.log(db_results);

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