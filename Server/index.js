const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Notebook'
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connecter!");
    let sql = "SELECT * FROM notatki";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

