const router = require ("express").Router()
const { Router } = require("express");
const path = require ("path") 
// GET Route for homepage
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

// Wildcard route to direct users to a 404 page
router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/pages/index.html"))
);

module.exports = router