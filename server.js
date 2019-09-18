const mysql = require("mysql");
const fs = require("fs");
const http = require("http");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "budale@912",
  database: "periodicTable"
});

con.connect();

http
  .createServer(function(req, res) {
    console.log("requested url : " + req.url);

    if (req.url === "/home" || req.url === "/") {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      fs.createReadStream("./frontend/index.html").pipe(res);
    } else if (req.url === "/index.js") {
      res.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      fs.createReadStream("./frontend/index.js").pipe(res);
    } else if (req.url === "/index.css") {
      res.writeHead(200, {
        "Content-Type": "text/css"
      });
      fs.createReadStream("./frontend/index.css").pipe(res);
    } else if (req.url === "/api") {
      res.writeHead(200, {
        "Content-Type": "aplication/json"
      });

      con.query("SELECT * FROM elements", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.end(JSON.stringify(result));
      });
    }
  })
  .listen(3000);

console.log("Hello JSON");
