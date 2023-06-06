
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "123123",
    database: "bditens",
});


app.post("/item", (req, res) => {
    const { item} = req.body;
    let SQL = "INSERT INTO listaitens ( itens ) VALUES (?)";
    db.query(SQL, values, (err, result) => {
        console.log(err);
    })
});


// DELETE
app.delete("/item", (req, res) => {

    const { id } = req.params;
    let SQL = "DELETE FROM listaitens (? )";

    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("rodando servidor")
    console.log("null")
});