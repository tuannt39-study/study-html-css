function Hello() {
    alert("Hello, World");
}

function showResult() {
    x = document.forms["myform"]["newinput"].value;
    document.forms["myform"]["result"].value = x;
}


var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg;

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
    msg = '<p>Log message created and row inserted.</p>';
    document.querySelector('#status').innerHTML = msg;
});

db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
        var len = results.rows.length, i;
        msg = "<p>Found rows: " + len + "</p>";
        document.querySelector('#status').innerHTML += msg;

        for (i = 0; i < len; i++) {
            msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
            document.querySelector('#status').innerHTML += msg;
        }
    }, null);
});


document.getElementsByTagName("eventsource")[0].addEventListener("server-time", eventHandler, false);

function eventHandler(event) {
    // Alert time sent by the server
    document.querySelector('#ticker').innerHTML = event.data;
}


function PlayVideo() {
    var v = document.getElementsByTagName("video")[0];
    v.play();
}

function bigLoop() {
    for (var i = 0; i <= 10000000000; i += 1) {
        var j = i;
    }
    alert("Completed " + j + "iterations");
}
function sayHello() {
    alert("Xin chào nhé....");
}