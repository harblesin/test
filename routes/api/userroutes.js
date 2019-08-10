const router = require("express").Router();
const userController = require("../../controllers/usercontroller");

router.route("/")
.post(userController.saveUser)
.get(userController.findAll)
.delete(userController.deleteUser)

module.exports = router;