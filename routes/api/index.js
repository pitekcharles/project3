const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const charRoutes = require("./characters");
// const guildsRoutes = require("./guilds");

// routes
router.use("/users", userRoutes);
// router.use("/characters", charRoutes);
// router.use("/guilds", guildsRoutes);



module.exports = router;