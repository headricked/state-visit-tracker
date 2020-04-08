const stateModel = require("../models/stateModel");

function getStateList(req, res) {
    // get the list of all states in the DB
    console.log("Getting all states...");
    stateModel.getAllStates(function(error, results) {
        res.json(results);
    });
}

function getState(req, res) {
    // app.get("/state/:id", function(req, res) {
    // get a single state by ID
    let id = req.query.id;
    // let id = req.params.id;
    console.log(`Getting state with id: ${id}`);
    stateModel.getStateById(id, function(error, result) {
        res.json(result);
    });
}


function postState(req, res) {
    let name = req.body.name;
    console.log(`Creating a new state with name: ${name}`);
    stateModel.insertNewState(name, function(error, results) {
        res.json(results);
    });
}

// FOR TESTING PURPOSES
function addVisited(request, response) {
    let checked = request.body.checked;
    console.log(`Adding a visited state to the visited table: ${checked}`);
    stateModel.addVisitedState(checked, function(error, results) {
        response.json(results);
    });
}

// FOR TESTING PURPOSES
function deleteVisited(request, response) {
    let checked = request.body.checked;
    console.log(`Adding a visited state to the visited table: ${checked}`);
    stateModel.deleteVisitedState(checked, function(error, results) {
        response.json(results);
    });
}

module.exports = {
    getStateList: getStateList,
    getState: getState,
    postState: postState,
    addVisited: addVisited,
    deleteVisited: deleteVisited
};