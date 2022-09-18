//requiring dependencies

const uuid = require("uuid");
const fs = require("fs");
const express = require("express");
const path = require("path");
const router = require("express").Router();

//get notes html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

//path to index page on local host.
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
