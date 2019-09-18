const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "budale@912",
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connection successful!');
});

const db = "CREATE DATABASE periodicTable";

con.query(db, function(err, result) {
    if (err) throw err;
    console.log('Database created!');
})