const express = require("express");
const UserController = require("../app/controllers/UserController");

const router = express.Router();

router.get('/authenticateUser/:uname/:pwd', UserController.authenticateUser);

module.exports = router;