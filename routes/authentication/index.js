const router = require("express").Router();
const authRoutes = require("./authRoutes");

router.use("/authentication", authRoutes);

module.exports = router;