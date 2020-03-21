const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
// console.log("db_url: " + db_url);
const pool = new Pool({connectionString: db_url});


function getAllStates(callback) {
    // get all the states from the DB
    let results = {
        states: [
            { stateid: 1, statename: "Alabama"},
            { stateid: 2, statename: "Alaska"},
            { stateid: 3, statename: "Arizona"},
            { stateid: 4, statename: "Arkansas"},
            { stateid: 5, statename: "Califorina"},
            { stateid: 6, statename: "Colorado"},
            { stateid: 7, statename: "Connecticut"},
            { stateid: 8, statename: "Delaware"},
            { stateid: 9, statename: "Florida"},
            { stateid: 10, statename: "Georgia"},
            { stateid: 11, statename: "Hawaii"},
            { stateid: 12, statename: "Idaho"},
            { stateid: 13, statename: "Illinois"},
            { stateid: 14, statename: "Indiana"},
            { stateid: 15, statename: "Iowa"},
            { stateid: 16, statename: "Kansas"},
            { stateid: 17, statename: "Kentucky"},
            { stateid: 18, statename: "Louisiana"},
            { stateid: 19, statename: "Maine"},
            { stateid: 20, statename: "Maryland"},
            { stateid: 21, statename: "Massachusetts"},
            { stateid: 22, statename: "Michigan"},
            { stateid: 23, statename: "Minnesota"},
            { stateid: 24, statename: "Mississippi"},
            { stateid: 25, statename: "Missouri"},
            { stateid: 26, statename: "Montana"},
            { stateid: 27, statename: "Nebraska"},
            { stateid: 28, statename: "Nevada"},
            { stateid: 29, statename: "New Hampshire"},
            { stateid: 30, statename: "New Jersey"},
            { stateid: 31, statename: "New Mexico"},
            { stateid: 32, statename: "New York"},
            { stateid: 33, statename: "North Carolina"},
            { stateid: 34, statename: "North Dakota"},
            { stateid: 35, statename: "Ohio"},
            { stateid: 36, statename: "Oklahoma"},
            { stateid: 37, statename: "Oregon"},
            { stateid: 38, statename: "Pennsylvania"},
            { stateid: 39, statename: "Rhoda Island"},
            { stateid: 40, statename: "South Carolina"},
            { stateid: 41, statename: "South Dakota"},
            { stateid: 42, statename: "Tennessee"},
            { stateid: 43, statename: "Texas"},
            { stateid: 44, statename: "Utah"},
            { stateid: 45, statename: "Vermont"},
            { stateid: 46, statename: "Virginia"},
            { stateid: 47, statename: "Washington"},
            { stateid: 48, statename: "West Virginia"},
            { stateid: 49, statename: "Wisconsin"},
            { stateid: 50, statename: "Wyoming"}
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