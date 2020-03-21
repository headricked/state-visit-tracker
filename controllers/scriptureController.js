const scriptureModel = require("../models/scriptureModel");

function search(req, res) {
    // TODO check if bookId or if topicId, and call appropriate function

    let book = req.query.book;
    let topic = req.query.topic;

    if (book) {
        scriptureModel.searchByBook(book, function(error, results) {
            res.json(results);
        });    
    } else {
        scriptureModel.searchByTopic(topic, function(error, results) {
            res.json(results);
        });
    
    }


}

function getScriptureList(req, res) {
    scriptureModel.getAllScriptures(function(error, results) {
        res.json(results);
    });

}

function getScripture(req, res) {
    let id = 1;
    scriptureModel.getScriptureById(id, function(error, results) {
        res.json(results);
    });
}

function insertNewScripture(req, res) {
    let book = "John";
    let chapter = 3;
    let verse = 16;
    let content = "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.";

    scriptureModel.insertNewScripture(book, chapter, verse, content, function(error, results) {
        res.json(results);
    });
}

function assignTopicToScripture(req, res) {
    let topicId = 1;
    let scriptureId = 1;
    scriptureModel.assignTopicToScripture(topicId, scriptureId, function(results) {
        res.json(results);
    });
}

module.exports = {
    search: search,
    getScriptureList: getScriptureList,
    getScripture: getScripture,
    insertNewScripture: insertNewScripture,
    assignTopicToScripture: assignTopicToScripture
}