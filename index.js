const express = require("express");
const path = require("path");

const connectionString = process.env.DATABASE_URL || "postgres://sbulohmxxomdxe:65fa3a1accfcec82dda81fe6c36e8dd1927ca810389ef9251f1e2070931f0f9a@ec2-3-229-210-93.compute-1.amazonaws.com:5432/d9ko034i4tp4rp?ssl=true";



const stateController = require("./controllers/stateController");
const scriptureController = require("./controllers/scriptureController");
const PORT = process.env.PORT || 5000;

let app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true})); // support url encoded bodies

app.get("/states", stateController.getStateList);
app.get("/state", stateController.getState);
app.post("/state", stateController.postState);

app.get("/search", scriptureController.search);
app.get("/scriptures", scriptureController.getScriptureList);
app.get("/scripture", scriptureController.getScripture);
app.post("/scripture", scriptureController.insertNewScripture);
app.post("/assignTopicToScripture", scriptureController.assignTopicToScripture);

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});