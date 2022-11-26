const express = require("express");
const router = express.Router();
const memberControllers = require('../controllers/member');


router.route("/getAll").get(memberControllers.getAll);


module.exports = router;