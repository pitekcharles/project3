const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const authRoutes = require("./authentication");
// const db = require("../models");

// router.get("/test", (req, res) => {
//     db.Guild.find()
//     .then(guilds => res.json(guilds))
//     .catch(err => console.log(err))
// })

// router.post("/test", (req, res) => {
//     console.log("string hit")
//     db.Guild.create(req.body)
//     .then(guild => res.json(guild))
//     .catch(err => console.log(err))
// })


//API Routes
router.use("/api", apiRoutes);
// router.use("/auth", authRoutes);

// if no API routes are hit, send React app to
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));   
});

module.exports = router;