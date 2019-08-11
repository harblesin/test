const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
.post(userController.createUser)
.get(userController.findAll)
.delete(userController.removeUser)

module.exports = router;