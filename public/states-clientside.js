let url = "/search";

function loadStates() {

    /***************************************************
     * USING JQUERY
     **************************************************/
    // var frog = $("#topic").val();
    // console.log("States: " + frog);

    // $.get("/search", { state: state }, function (data) {
    // $.get("/states", {statename: frog}, function (data) {
    $.get("/states", null, function (data) {
        console.log("Back from the server with:");
        console.log(data);

        for (var i = 0; i < data.states.length; i++) {
            var state = data.states[i];

            $("#ulTopics").append(
                "<li>" +
                state.id + " : " +
                state.statename +
                "</li>");
        }

    })

}

function searchByBook() {
    console.log("Searching by book...");

    /***************************************************
     * USING JQUERY
     **************************************************/
    var book = $("#book").val();
    console.log("Book: " + book);

    $.get("/search", { book: book }, function (data) {
        console.log("Back from the server with:");
        console.log(data);

        for (var i = 0; i < data.list.length; i++) {
            var scripture = data.list[i];

            $("#ulScriptures").append(
                "<li>" +
                scripture.book + " " +
                scripture.chapter + ":" +
                scripture.verse + " - " +
                scripture.content +
                "</li>");
        }

    })


    /***************************************************
     * USING VANILLA JAVASCRIPT
     **************************************************/
    // let bookName = document.getElementById("book").value;
    // let resultList = document.getElementById("ulScriptures");

    // var xhttp = new XMLHttpRequest();
    // console.log(bookName);

    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         let results = this.responseText;
    //         let books = JSON.parse(results);

    //         for (let i = 0; i < books.list.length; i++) {
    //             let scripture = books.list[i];

    //             let li = `<li>${scripture.book} ${scripture.chapter}:${scripture.verse} - ${scripture.content}</li>`;

    //             resultList.innerHTML += li;
    //         }

    //     }
    // };
    // xhttp.open("GET", url, true);
    // xhttp.send();

}

function searchByTopic() {
    console.log("Searching by topic...");

    /***************************************************
     * USING JQUERY
     **************************************************/
    var topic = $("#topic").val();
    console.log("Topic: " + topic);

    $.get("/search", { topic: topic }, function (data) {
        console.log("Back from the server with:");
        console.log(data);

        for (var i = 0; i < data.list.length; i++) {
            var topic = data.list[i];

            $("#ulTopics").append(
                "<li>" +
                topic.topic +
                "</li>");
        }

    })

}