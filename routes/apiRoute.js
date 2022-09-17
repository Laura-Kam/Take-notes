//need const router- express.router()
//require database.//get notes, post notes//delete notes
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
/*posting a new note title and note text.
need to include customer object in the body of the request.
updating route path with more notes by creating a json object and pushing it to notes const array.*/

router.post("/notes", (req, res) => {
  console.log(req);
  const note = {
    // id: notes.length + 1,
    title: req.body.name,
    text: req.body.text,
  };
  /*read the existing db.json file, parse it into json, add note object to array,
  stringify, write to db.json file. End with sending note.*/
  fs.readFile("../db/db.json", function (error, data) {
    const jsonArray = JSON.parse(data);
    jsonArray.push(note);
    const jsonString = JSON.stringify(jsonArray);

    //is file path correct?
    fs.writeFile("../develop/db/db.json", jsonString, function (error) {
      res.end();
    });
  });
});
router.get("/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(notes);
  });
});
//delete-route copy and paste post endpoint.
router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  //stringify, write to db.json file. End with sending note.
  fs.readFile("../db/db.json", function (error, data) {
    const jsonArray = JSON.parse(data);
    jsonArray.push(note); //find record from that id to delete it individually.
    const jsonString = JSON.stringify(jsonArray);
    fs.writeFile("../db/db.json", jsonString, function (error) {
      res.end();
    });
  });
});
module.exports = router;

// //need const router- express.router()
// //require database.//get notes, post notes//delete notes
// const router = require("express").Router();
// const { v4: uuidv4 } = require("uuid");
// const fs = require("fs");

// //posting a new note title and note text.
// //need to include customer object in the body of the request.
// // updating route path with more notes by creating a json object and pushing it to notes const array.

// router.post("/notes", (req, res) => {
//   console.log(req);
//   const note = {
//     // id: notes.length + 1,
//     title: req.body.name,
//     text: req.body.text,
//   };
//   //read the existing db.json file, parse it into json, add note object to array,
//   //stringify, write to db.json file. End with sending note.
//   fs.readFile("../db/db.json", function (error, data) {
//     const jsonArray = JSON.parse(data);
//     jsonArray.push(note);
//     const jsonString = JSON.stringify(jsonArray);
//     fs.writeFile("../db/db.json", jsonString, function (error){
//       res.end();
//     });
// });

// router.get("/notes", function (req, res) {
//   fs.readFile("db/db.json", "utf8", function (err, data) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.json(notes);
//   });
// });

// delete-route copy and paste post endpoint.

// router.delete("/notes/:id", (req, res) => {
//   const id = req.params.id;
//   //stringify, write to db.json file. End with sending note.
//   fs.readFile("../db/db.json", function (error, data) {
//     const jsonArray = JSON.parse(data);
//     jsonArray.push(note);  //find record from that id to delete it individually.
//     const jsonString = JSON.stringify(jsonArray);
//     fs.writeFile("../db/db.json", jsonString, function (error){
//       res.end();

//     });
//   }
// },
// module.exports = router;
