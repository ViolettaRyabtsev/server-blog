const express = require("express");
const app = express();
const mysql = require("mysql2");
const { conn } = require("./db.js");
var cors = require("cors");
app.use(cors());
app.use(express.json({ strict: false }));

app.get("/", (req, res) => {
  conn.query("SELECT * FROM reviews", (err, rows) => {
    if (err) throw err;

    // res.json(rows);
    res.send(JSON.stringify(rows));
  });
});

app.post("/addComment", async (req, res) => {
  const name = req.body.name;
  const body = req.body.body;
  const id = req.body.id;
  conn.query(
    `INSERT INTO reviews (name, body, id) VALUES ('${name}', '${body}', '${id}')`
  );
  res.status(201);
  res.send();
});

app.post("/users/addEmail", async (req, res) => {
  const email = req.body.email;
  console.log(email, "email");
  conn.query(`INSERT INTO emails (emails) VALUES ('${email}}')`);
  res.status(201);
  res.send();
});

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
