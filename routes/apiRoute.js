//need const router- express.router()
//require database.//get notes, post notes//delete notes
const router = require("express").Router();
const uuid = require("uuid");
const fs = require("fs");
const express = require("express");
const path = require("path");
const db = require("../db/db.json");

/*posting a new note title and note text.
need to include customer object in the body of the request.
updating route path with more notes by creating a json object and pushing it to notes const array.*/

router.post("/notes", (req, res) => {
  db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => err);
  res.json(db);
});

router.get("/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, note) {
    if (err) {
      console.log(err);
      return;
    }
    const data = JSON.parse(note);
    console.log(data);
    res.json(data);
  });
});

//delete-route copy and paste post endpoint.
router.delete("/notes/:id", (req, res) => {
  db.splice(req.params.id - 1, 1);
  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => err);
  res.json(db);
});

module.exports = router;
