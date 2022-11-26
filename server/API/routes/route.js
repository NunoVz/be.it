const express = require("express");
const router = express.Router();
const memberControllers = require('../controllers/member');


router.route("/getAll").get(memberControllers.getAll);

//Posts
router.route("/addVend").post(memberControllers.getAll);
router.route("/addLoja").post(memberControllers.getAll);
router.route("/addProd").post(memberControllers.getAll);
router.route("/addWaste").post(memberControllers.getAll);
router.route("/addComp").post(memberControllers.getAll);
router.route("/addFunc").post(memberControllers.getAll);



module.exports = router;