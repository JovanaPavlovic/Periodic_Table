const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "budale@912",
    database: "periodicTable"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected to periodicTable database!");
});

const sql = "CREATE TABLE if not EXISTS elements(id INT(11) primary key auto_increment, atomic_number INT(11), element_name varchar(255) NOT NULL, element_symbol varchar(255) NOT NULL, category varchar(255) NOT NULL, atomic_mass DECIMAL(10,4), boiling_point DECIMAL(10,4), melting_point DECIMAL(10,4), density DECIMAL(10,5), appearance varchar(255), color varchar(255), discovered_by varchar(255), agregate_state varchar(255))";

con.query(sql, function(err, result, fields) {

    if (err) throw err;
    console.log("Table created!");
});

con.end(function(err) {
    if (err) {
        return console.log(err.message);
    }
});