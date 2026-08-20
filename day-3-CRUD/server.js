const express = require("express");

const app = express();

app.use(express.json());

let port = 3000;

let users = [];

//create
app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send("users saved");
});

// read
app.get("/", (req, res) => {
  res.send(users);
});

//update
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let {name} = req.body;

  let updatedUser = users.map((val) =>
    val.id === id ? { ...val, name } : val,
  );
  res.send(updatedUser);
});

//delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let userData = users.filter((val) => val.id !== id);
  users = userData;
  res.send("user deleted");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
