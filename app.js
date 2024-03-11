import express from "express";
const app = express();

import path from "path";

const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

import mysql from "mysql2";

// connecting Database
const connection = mysql.createConnection({
  port: "3306",
  user: "gen_user",
  host: "192.168.0.4",
  database: "default_db",
  password: "12a17d060777"
});

app.post("/call_back", async function (req, res) {
  console.log(req.body);
  await connection.promise().query(
    `INSERT INTO call_back (phone_number) 
        VALUES (?)`,
    [req.body.phonenumber]
  );
  res.sendFile(path.join(__dirname, "public/success.html"));
});

app.post("/order_service", async function (req, res) {
  const { name, phone, email, companyname, tasks, myfile, spam } = req.body;

  await connection.promise().query(
    `INSERT INTO order_service (customer_name, phone_number, email, company_name, task_details, file_path, newsletter_consent)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, phone, email, companyname, tasks, myfile, spam]
  );
  res.sendFile(path.join(__dirname, "public/success.html"));
});

app.listen(5000, () => {
  console.log("Server listening in http://localhost:5000");
});
