const router = require("express").Router();
const userController = require("../../controllers/charactersController");

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