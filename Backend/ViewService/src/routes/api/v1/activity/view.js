const express = require("express");
const { roles } = require("../../../../models");
const router = express.Router();
let api_version = process.env.API_VERSION;



let rolesController = require("../../../../controllers/"+api_version+"/activity/view.controllers");

router.get("/viewRole",rolesController.viewRole);


module.exports = router;
