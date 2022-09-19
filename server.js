//requiring dependencies.

const apiRoutes = require("./routes/apiRoute");
const htmlRoutes = require("./routes/htmlRoute");
const express = require("express");
const path = require("path");
const fs = require("fs");

//to create a unique id
const uuid = require("uuid");

const app = express();

//whatever is in the environment variable PORT or 3001 if not there. E.g Heroku (envi).
const PORT = process.env.PORT || 3001;

//this is where the note titles and text are stored in json format.
let notes = require("./db/db.json");

//public files are served
app.use(express.static("public"));

//middleware-sets up the Express app to handle data parsing.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use puts middleware functions when request path used.
//when user navigates to /api then go to apiRoutes (put together)
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//listening port set up
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
