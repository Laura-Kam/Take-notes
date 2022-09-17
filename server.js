//http://localhost:3001/api/notes -the resource-should be where the db_json file is read.
//Refers to the notes created by a user in out application. Creating more notes- done by sending http request to this endpoint.

//get api/notes.:id response would be {id 1, name "")} etc . - param.

//requiring express module.
//requiring path to work with directories and file paths.
//require fs to allow javascript to access local files.

const apiRoutes = require("./routes/apiRoute");
const express = require("express");
const path = require("path");
const fs = require("fs");

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
app.use("/api", apiRoutes);
app.get("/", (req, res) => res.send("Home page"));

//path to notes page on local host. Route for getting list of notes.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/develop/public/notes.html"))
);

//every end point needs to be above this. Asterix catches everything.
//path to index page on local host.
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/develop/public/index.html"))
);

//listening port set up
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
