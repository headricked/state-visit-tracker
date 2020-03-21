function searchByBook(book, callback) {
    console.log("Searching the DB for book: " + book);

    let results = {
        list:[
            {
                id:1,
                book:book,
                chapter:1,
                verse:1,
                content:"In the beginning God created the heaven and the earth."
            },
            {
                id:2,
                book:book,
                chapter:1,
                verse:2,
                content:"And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."
            },
            {
                id:3,
                book:book,
                chapter:1,
                verse:3,
                content:"And God said, Let there be light: and there was light."
            }
        ]
    };
    callback(null, results);
}

function searchByTopic(topic, callback) {
    console.log("Searching the DB for topic: " + topic);

    let results = {
        list:[
            {
                id:1,
                topic:topic
            },
            {
                id:2,
                topic:topic
            },
            {
                id:3,
                topic:topic
            }
        ]
    };
    callback(null, results);
}

function getAllScriptures(callback) {
    let results = {
        list:[
            {id:1,book:"Genesis",chapter:1,verse:1,content:"In the beginning God created the heaven and the earth."},
            {id:2,book:"Genesis",chapter:1,verse:2,content:"And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."},
            {id:3,book:"Genesis",chapter:1,verse:3,content:"And God said, Let there be light: and there was light."}
        ]
    };
    callback(null, results);
}

function getScriptureById(id, callback) {
    let result = {id:1,book:"Genesis",chapter:1,verse:1,content:"In the beginning God created the heaven and the earth."};
    callback(null, result);
}

function insertNewScripture(book, chapter, verse, content, callback) {
    let results = {
            success: true,
            scripture:{
                id:1,
                book: book,
                chapter: chapter,
                verse: verse
            }
    };
    callback(null, results);
}

function assignTopicToScripture(topicId, scriptureId, callback) {
    let results = {success: true};
    callback(null, results);
}

module.exports = {
    searchByTopic: searchByTopic,
    searchByBook: searchByBook,
    getAllScriptures: getAllScriptures,
    getScriptureById: getScriptureById,
    insertNewScripture: insertNewScripture,
    assignTopicToScripture: assignTopicToScripture
}