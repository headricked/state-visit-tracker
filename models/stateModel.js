function getAllStates(callback) {
    // get all the states from the DB
    let results = {
        states: [
            { stateid: 1, statename: "Alabama", visited: true},
            { stateid: 2, statename: "Alaska", visited: false},
            { stateid: 3, statename: "Arizona", visited: false},
            { stateid: 4, statename: "Arkansas", visited: false},
            { stateid: 5, statename: "Califorina", visited: true},
            { stateid: 6, statename: "Colorado", visited: true},
            { stateid: 7, statename: "Connecticut", visited: false},
            { stateid: 8, statename: "Delaware", visited: false},
            { stateid: 9, statename: "Florida", visited: true},
            { stateid: 10, statename: "Georgia", visited: true},
            { stateid: 11, statename: "Hawaii", visited: false},
            { stateid: 12, statename: "Idaho", visited: true},
            { stateid: 13, statename: "Illinois", visited: true},
            { stateid: 14, statename: "Indiana", visited: true},
            { stateid: 15, statename: "Iowa", visited: true},
            { stateid: 16, statename: "Kansas", visited: false},
            { stateid: 17, statename: "Kentucky", visited: true},
            { stateid: 18, statename: "Louisiana", visited: true},
            { stateid: 19, statename: "Maine", visited: false},
            { stateid: 20, statename: "Maryland", visited: false},
            { stateid: 21, statename: "Massachusetts", visited: true},
            { stateid: 22, statename: "Michigan", visited: true},
            { stateid: 23, statename: "Minnesota", visited: true},
            { stateid: 24, statename: "Mississippi", visited: true},
            { stateid: 25, statename: "Missouri", visited: false},
            { stateid: 26, statename: "Montana", visited: false},
            { stateid: 27, statename: "Nebraska", visited: true},
            { stateid: 28, statename: "Nevada", visited: true},
            { stateid: 29, statename: "New Hampshire", visited: false},
            { stateid: 30, statename: "New Jersey", visited: true},
            { stateid: 31, statename: "New Mexico", visited: true},
            { stateid: 32, statename: "New York", visited: true},
            { stateid: 33, statename: "North Carolina", visited: true},
            { stateid: 34, statename: "North Dakota", visited: false},
            { stateid: 35, statename: "Ohio", visited: true},
            { stateid: 36, statename: "Oklahoma", visited: false},
            { stateid: 37, statename: "Oregon", visited: false},
            { stateid: 38, statename: "Pennsylvania", visited: true},
            { stateid: 39, statename: "Rhoda Island", visited: false},
            { stateid: 40, statename: "South Carolina", visited: true},
            { stateid: 41, statename: "South Dakota", visited: false},
            { stateid: 42, statename: "Tennessee", visited: true},
            { stateid: 43, statename: "Texas", visited: true},
            { stateid: 44, statename: "Utah", visited: true},
            { stateid: 45, statename: "Vermont", visited: false},
            { stateid: 46, statename: "Virginia", visited: true},
            { stateid: 47, statename: "Washington", visited: false},
            { stateid: 48, statename: "West Virginia", visited: true},
            { stateid: 49, statename: "Wisconsin", visited: true},
            { stateid: 50, statename: "Wyoming", visited: true}
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