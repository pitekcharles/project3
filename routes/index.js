const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require("../models");

router.get("/test", (req, res) => {
    db.Character.find()
    .then(characters => res.json(characters))
    .catch(err => console.log(err))
})

router.post("/test", (req, res) => {
    console.log("string hit")
    db.Character.create(req.body)
    .then(character => res.json(character))
    .catch(err => console.log(err))
})


//API Routes
router.use("/api", apiRoutes);

// if no API routes are hit, send React app to
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));   
});

module.exports = router;