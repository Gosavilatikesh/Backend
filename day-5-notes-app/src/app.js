const express = require("express");
const connectDb = require("./config/db");
const createNotesController = require("./controllers/notes.controllers");
const notesRoute = require("./routes/notes.route");
const NotesModel = require("../../day-4-db-connection/src/models/note.model");

const app = express();

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("done");
});

app.use("/notes", notesRoute);

module.exports = app;
