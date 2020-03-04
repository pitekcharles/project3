const router = require("express").Router();
const guildsController = require("../../controllers/guildsController.js");

// matches with "/api/characters"
router.route("/")
    .get(guildsController.findAll)
    .post(guildsController.create);

// matches with "/api/characters/:id"
router
    .route("/:id")
    .get(guildsController.findById)
    .put(guildsController.update)
    .delete(guildsController.remove);

    module.exports = router;