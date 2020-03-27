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
        console.log(data);

        // $('#tableStates').append('<table></table>');
        // let tableStates = $('#tableStates').children();
        // for (i = 0; i < data.states.length; i++) {
        //     let state = data.states[i];
        //     tableStates.append(`
        //         <tr>
        //             <td>
        //                 <label class="" for="customSwitch${i}">${state.estado_name}</label>
        //             </td>
        //             <td>
        //                 <div class="custom-control custom-switch">
        //                     <input checked type="checkbox" class="custom-control-input" id="customSwitch${i}">
        //                     <label class="custom-control-label" for="customSwitch${i}"></label>
        //                 </div>
        //             </td>
        //         </tr>
        //     `);

        //     // Add a "checked" symbol when clicking on a list item
        //     var toggleItem = document.querySelector(`#customSwitch${i}`);
        //     toggleItem.addEventListener('click', function (ev) {
        //         if (ev.target.checked) {
        //             // ev.target.classList.toggle('checked');
        //             console.log(`Checked ${state.estado_name}`);
        //         } else if (!ev.target.checked) {
        //             console.log(`Unchecked ${state.estado_name}`);
        //         }
        //     }, false);


        // }


        // $('#tableStates').append('<table></table>');
        // let tableStates = $('#tableStates').children();
        // for (k = 0; k < data.visited.length; k++) {
        //     for(i = 0; i <= data.states.length; i++) { // TESTING
        //         let state = data.states[i];
        //         // let person = data.people[j]; // TESTING
        //         let visit = data.visited[k]; // TESTING

        //         tableStates.append(`
        //             <tr>
        //                 <td>
        //                     <label class="" for="customSwitch${i}">${state.statename}</label>
        //                 </td>
        //                 <td>
        //                     <div class="custom-control custom-switch">
        //                         <input type="checkbox" class="custom-control-input" id="customSwitch${i}">
        //                         <label class="custom-control-label" for="customSwitch${i}"></label>
        //                     </div>
        //                 </td>
        //             </tr>
        //         `);

        //         // Add a "checked" symbol when clicking on a list item
        //         var toggleItem = document.querySelector(`#customSwitch${i}`);
        //         toggleItem.addEventListener('click', function (ev) {
        //             if (ev.target.checked) {
        //                 // ev.target.classList.toggle('checked');
        //                 console.log(`Checked ${state.statename}`);
        //             } else if (!ev.target.checked) {
        //                 console.log(`Unchecked ${state.statename}`);
        //             }
        //         }, false);

        //         if (visit.stateid === state.sid) {
        //             document.getElementById(`customSwitch${i}`).checked = true;
        //             k++;
        //         }
        //     }
        // }


        $('#tableStates').append('<table></table>');
        let tableStates = $('#tableStates').children();
        for (k = 0; k < data.statesvisited.length; k++) {
                let statename = data.statesvisited[k].statename;
                let stateid = data.statesvisited[k].stateid;
                let isvisited = data.statesvisited[k].isvisited;

                tableStates.append(`
                    <tr>
                        <td>
                            <label class="" for="customSwitch${k}">${statename}</label>
                        </td>
                        <td>
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch${k}">
                                <label class="custom-control-label" for="customSwitch${k}"></label>
                            </div>
                        </td>
                    </tr>
                `);

                // Add a "checked" symbol when clicking on a list item
                var toggleItem = document.querySelector(`#customSwitch${k}`);
                toggleItem.addEventListener('click', function (ev) {
                    if (ev.target.checked) {
                        // ev.target.classList.toggle('checked');
                        console.log(`Checked ${statename}`);
                    } else if (!ev.target.checked) {
                        console.log(`Unchecked ${statename}`);
                    }
                }, false);

                if (isvisited === true) {
                    document.getElementById(`customSwitch${k}`).checked = true;
                    // k++;
                }
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

            $("#tableStates").append(
                "<li>" +
                scripture.book + " " +
                scripture.chapter + ":" +
                scripture.verse + " - " +
                scripture.content +
                "</li>");
        }
    })
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