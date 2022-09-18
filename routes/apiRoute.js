//need const router- express.router()
//require database.//get notes, post notes//delete notes
const router = require("express").Router();
const uuid = require("uuid");
const fs = require("fs");
const express = require("express");
const path = require("path");

/*posting a new note title and note text.
need to include customer object in the body of the request.
updating route path with more notes by creating a json object and pushing it to notes const array.*/

router.post("/notes", (req, res) => {
  let newNote = {
    id: id,
    title: req.body.title,
    text: req.body.text,
  };
  console.log(newNote);
  notes.push(newNote);
  const stringifyNote = JSON.stringify(notes);
  res.json(notes);
  fs.writeFile("./db/db.json", stringifyNote, (err) => {
    if (err) console.log(err);
    else {
      console.log("Notes saved to db.json file");
    }
  });
});

/*read the existing db.json file, parse it into json, add note object to array,
  stringify, write to db.json file. End with sending note.*/
fs.readFile("./db/db.json", function (error, data) {
  console.log("Data: " + data);
  const jsonArray = JSON.parse(data);
  jsonArray.push(note);
  const jsonString = JSON.stringify(jsonArray);
  //is file path correct?
  fs.writeFile("./db/db.json", jsonString, function (error) {
    res.end();
  });
});

router.get("/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, note) {
    if (err) {
      console.log(err);
      return;
    }
    const data = JSON.parse(note);
    res.JSON(data);
  });
});

//delete-route copy and paste post endpoint.
router.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //stringify, write to db.json file. End with sending note.
  fs.readFile("./db/db.json", function (error, data) {
    const jsonArray = JSON.parse(data);
    jsonArray.push(note); //find record from that id to delete it individually.
    const jsonString = JSON.stringify(jsonArray);
    fs.writeFile("./db/db.json", jsonString, function (error) {
      res.end();
    });
  });
});

module.exports = router;
