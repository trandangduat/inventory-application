var express = require('express');
var router = express.Router();

const weapon_controller = require("../controllers/weapon_controller.js");
const weapon_instance_controller = require("../controllers/weapon_instance_controller.js");
const weapon_type_controller = require("../controllers/weapon_type_controller.js");

// WEAPON TYPE ROUTES //
router.get("/", weapon_type_controller.index);

// WEAPON ROUTES //
router.get("/weapons", weapon_controller.index);

// WEAPON INSTANCE //
router.get("/weapon_instances", weapon_instance_controller.index);

module.exports = router;
