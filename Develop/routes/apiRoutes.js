const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
router.get("/notes", (req, res) => {
  fs.readFile("db/db.json", "utf-8", (err, data) => {
    return err ? console.log(err) : res.json(JSON.parse(data));
  });
});
router.post("/notes", (req, res) => {
  fs.readFile("db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    let jsondata = JSON.parse(data);
    let note = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };
    jsondata.push(note);
    fs.writeFile("db/db.json", JSON.stringify(jsondata), (err) =>
      err ? console.log(err) : res.redirect("/notes")
    );
  });
});
router.delete("/notes/:id", (req, res) => {
  fs.readFile("db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    let jsondata = JSON.parse(data);
    let notes = jsondata.filter(note => note.id !== req.params.id)
      
    
    
    fs.writeFile("db/db.json", JSON.stringify(notes), (err) =>
      err ? console.log(err) : res.redirect("/notes")
    );
  });
});
module.exports = router;
