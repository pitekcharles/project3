const router = require("express").Router();
const userRoutes = require("./users");
const charRoutes = require("./characters");

// routes
router.use("/users", userRoutes);
router.use("/characters", charRoutes);



module.exports = router;