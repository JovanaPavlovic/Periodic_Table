const http = require("http");
const fs = require("fs");
const mysql = require("mysql");
const fetch = require("node-fetch");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "budale@912",
  database: "periodicTable"
});

con.connect();

fetch(
  "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    return data.elements;
  })
  .then(function(elements) {
    elements.forEach(element => {
      if (element.boil == null) {
        element.boil = 0;
      }

      if (element.melt == null) {
        element.melt = 0;
      }

      if (element.density == null) {
        element.density = 0;
      }

      const sql = `INSERT INTO elements (atomic_number, element_name, element_symbol, category, atomic_mass, boiling_point, melting_point, density, appearance, color, discovered_by, agregate_state) 
            VALUES ('${element.number}', '${element.name}', '${element.symbol}', '${element.category}', '${element.atomic_mass}', '${element.boil}', '${element.melt}', '${element.density}', '${element.appearance}', '${element.color}','${element.discovered_by}', '${element.phase}')`;

      con.query(sql, function(err, result, fields) {
        if (err) throw err;

        console.log("Inserted element: " + element.name);
      });
    });
  })
  .catch(err => {
    console.error(err);
  });
