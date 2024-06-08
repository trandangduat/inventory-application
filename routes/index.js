var express = require('express');
var router = express.Router();

const weapon_controller = require("../controllers/weapon_controller.js");
const weapon_instance_controller = require("../controllers/weapon_instance_controller.js");
const weapon_type_controller = require("../controllers/weapon_type_controller.js");

// WEAPON TYPE ROUTES //
router.get("/", weapon_type_controller.index);

// WEAPON ROUTES //
router.get("/weapon", weapon_controller.index);
router.get("/weapon/create", weapon_controller.weapon_create_get);
router.get("/weapon/:id/delete", weapon_controller.weapon_delete_get);
router.get("/weapon/:id/update", weapon_controller.weapon_update_get);
router.post("/weapon/create", weapon_controller.weapon_create_post);
router.post("/weapon/:id/delete", weapon_controller.weapon_delete_post);
router.post("/weapon/:id/update", weapon_controller.weapon_update_post);

// WEAPON INSTANCE //
router.get("/weapon_instances", weapon_instance_controller.index);
router.get("/weapon_instance/create", weapon_instance_controller.weapon_instance_create_get);
router.get("/weapon_instance/:id/delete", weapon_instance_controller.weapon_instance_delete_get);
router.get("/weapon_instance/:id/update", weapon_instance_controller.weapon_instance_update_get);
router.post("/weapon_instance/create", weapon_instance_controller.weapon_instance_create_post);
router.post("/weapon_instance/:id/delete", weapon_instance_controller.weapon_instance_delete_post);
router.post("/weapon_instance/:id/update", weapon_instance_controller.weapon_instance_update_post);


module.exports = router;
