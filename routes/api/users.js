const router = require("express").Router();
const userController = require("../../controllers/usersController");

// matches with "/api/users"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

// matches with "/api/users/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

    module.exports = router;