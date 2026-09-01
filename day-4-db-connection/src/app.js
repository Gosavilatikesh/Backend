require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const connectDb = require("./config/database");
const NotesModel = require("./models/note.model");

const app = express();

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("done");
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;

  const newNote = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "note created successfully",
    data: newNote,
  });
});

module.exports = app;
