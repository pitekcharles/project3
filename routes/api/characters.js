const router = require("express").Router();
const charactersController = require("../../controllers/charactersController.js");

// matches with "/api/characters"
router.route("/")
    .get(charactersController.findAll)
    .post(charactersController.create);

// matches with "/api/characters/:id"
router
    .route("/:id")
    .get(charactersController.findById)
    .put(charactersController.update)
    .delete(charactersController.remove);

    module.exports = router;