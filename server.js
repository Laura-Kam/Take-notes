//http://localhost:3001/api/notes -the resource-should be where the db_json file is read.
//Refers to the notes created by a user in out application. Creating more notes- done by sending http request to this endpoint.

//get api/notes.:id response would be {id 1, name "")} etc . - param.

//requiring express module.
//requiring path to work with directories and file paths.
//require fs to allow javascript to access local files.

const express = require("express");
const path = require("path");
const fs = require("fs");

//objects array to input into database.

const notes = [];
//to create a unique id
const uuid = require("uuid");

const app = express();

//whatever is in the environment variable PORT or 3001 if not there. E.g Heroku (envi) - whatever it sets it to.
const PORT = process.env.PORT || 3001;

const noteData = require("./develop/db/db.json");

//public files are served
app.use(express.static("public"));

//middleware-sets up the Express app to handle data parsing.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Home page"));

//path to notes page on local host. Route for getting list of notes.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/develop/public/notes.html"))
);

app.get();
//path to index page on local host.
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/develop/public/index.html"))
);

//this get request is where the database file is read of notes- returns saved notes as json.
// app.get("/api/notes", (req, res) => res.json(noteData));

//same thing?
app.get("/api/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(notes);
  });
});

//If client searches for a specific id of a note- then only that one is returned;
app.get("/api/notes/:id", (req, res) => {
  req.params.id;
  res.send(re.params.id);
});

//listening port set up
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

//posting a new note title and note text.
//need to include customer object in the body of the request.
// updating route path with more notes by creating a json object and pushing it to notes const array.
app.post("/api/notes", (req, res) => {
  const note = {
    // id: notes.length + 1,
    title: req.body.name,
    text: req.body.text,
  };
  notes.push(note);
  res.send(note);
});

module.exports = fs;
