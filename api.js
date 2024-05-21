const client = require("./connection");
const express = require("express");
const app = express();

app.listen(3300, () => {
  console.log("Sever is now listening at port 3000");
});

client.connect();

app.get("/users", (req, res) => {
  client.query(`Select * from customer2`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});
app.get("/users/:id", (req, res) => {
  client.query(
    `Select * from customer2 where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
});

app.post("/users", (req, res) => {
  const user = req.body;
  let insertQuery = `insert into customer2(id, firstname, lastname, location) 
                     values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.put("/users/:id", (req, res) => {
  let user = req.body;
  let updateQuery = `update customer2
                     set firstname = '${user.firstname}',
                     lastname = '${user.lastname}',
                     location = '${user.location}'
                     where id = ${user.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
app.delete("/users/:id", (req, res) => {
  let insertQuery = `delete from customer2 where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
