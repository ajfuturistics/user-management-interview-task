const express = require("express");
const {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user/userController");

const router = express.Router();

router.route("/users").get(getAllUsers).post(addUser);
router.route("/user/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
