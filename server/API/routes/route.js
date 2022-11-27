const express = require("express");
const router = express.Router();
const memberControllers = require('../controllers/member');


router.route("/getProds").get(memberControllers.getProds);
router.route("/getProd").get(memberControllers.getProd);
router.route("/getProdComp").get(memberControllers.getCompProd);



//Posts
router.route("/addVend").post(memberControllers.postVend);
router.route("/addProd").post(memberControllers.postprod);
router.route("/addWaste").post(memberControllers.postWaste);
router.route("/addFunc").post(memberControllers.postFunc);



module.exports = router;