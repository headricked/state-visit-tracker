const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
// console.log("db_url: " + db_url);
const pool = new Pool({connectionString: db_url});


function getAllStates(callback) {
    // get all the states from the DB

    let sql = "SELECT id, statename FROM states";

    let results = {
        states: [
            { id: 1, statename: "Alabama"},
            { id: 2, statename: "Alaska"},
            { id: 3, statename: "Arizona"},
            { id: 4, statename: "Arkansas"},
            { id: 5, statename: "Califorina"},
            { id: 6, statename: "Colorado"},
            { id: 7, statename: "Connecticut"},
            { id: 8, statename: "Delaware"},
            { id: 9, statename: "Florida"},
            { id: 10, statename: "Georgia"},
            { id: 11, statename: "Hawaii"},
            { id: 12, statename: "Idaho"},
            { id: 13, statename: "Illinois"},
            { id: 14, statename: "Indiana"},
            { id: 15, statename: "Iowa"},
            { id: 16, statename: "Kansas"},
            { id: 17, statename: "Kentucky"},
            { id: 18, statename: "Louisiana"},
            { id: 19, statename: "Maine"},
            { id: 20, statename: "Maryland"},
            { id: 21, statename: "Massachusetts"},
            { id: 22, statename: "Michigan"},
            { id: 23, statename: "Minnesota"},
            { id: 24, statename: "Mississippi"},
            { id: 25, statename: "Missouri"},
            { id: 26, statename: "Montana"},
            { id: 27, statename: "Nebraska"},
            { id: 28, statename: "Nevada"},
            { id: 29, statename: "New Hampshire"},
            { id: 30, statename: "New Jersey"},
            { id: 31, statename: "New Mexico"},
            { id: 32, statename: "New York"},
            { id: 33, statename: "North Carolina"},
            { id: 34, statename: "North Dakota"},
            { id: 35, statename: "Ohio"},
            { id: 36, statename: "Oklahoma"},
            { id: 37, statename: "Oregon"},
            { id: 38, statename: "Pennsylvania"},
            { id: 39, statename: "Rhoda Island"},
            { id: 40, statename: "South Carolina"},
            { id: 41, statename: "South Dakota"},
            { id: 42, statename: "Tennessee"},
            { id: 43, statename: "Texas"},
            { id: 44, statename: "Utah"},
            { id: 45, statename: "Vermont"},
            { id: 46, statename: "Virginia"},
            { id: 47, statename: "Washington"},
            { id: 48, statename: "West Virginia"},
            { id: 49, statename: "Wisconsin"},
            { id: 50, statename: "Wyoming"}
        ]
    };
    callback(null, results);
}

function loadStates(state, callback) {
    console.log("Searching the DB for topic: " + state);

    let results = {
        list:[
            {
                id:1,
                state:state
            },
            {
                id:2,
                state:state
            },
            {
                id:3,
                state:state
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
    let results = {success:true};
    callback(null, results);
}

module.exports = {
    getAllStates: getAllStates,
    loadStates: loadStates,
    getStateById: getStateById,
    insertNewState: insertNewState
}