// Importation du module express
const express = require("express");
// Creation d'un router express
const router = express.Router();
// Importation du model users
const verifieToken = require("../middlewares/auth");

const UserController = require("../controllers/user.controller");

router.post("/register", UserController.postUser);

router.post("/login", UserController.sign);

router.get("/all", UserController.getAllUsers);

router.get("/:id", UserController.getUser);

router.delete("/delete/:id", UserController.deleteUser);

router.put("/update/:id", UserController.updateUser);

module.exports = router;
