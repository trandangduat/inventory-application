var express = require('express');
var router = express.Router();

const weapon_controller = require("../controllers/weapon_controller.js");
const skin_controller = require("../controllers/skin_controller.js");
const skin_instance_controller = require("../controllers/skin_instance_controller.js");

// skin TYPE ROUTES //
router.get("/", skin_controller.index);

// skin ROUTES //
router.get("/skin", skin_controller.index);
router.get("/skin/create", skin_controller.skin_create_get);
router.get("/skin/:id/delete", skin_controller.skin_delete_get);
router.get("/skin/:id/update", skin_controller.skin_update_get);
router.post("/skin/create", skin_controller.skin_create_post);
router.post("/skin/:id/delete", skin_controller.skin_delete_post);
router.post("/skin/:id/update", skin_controller.skin_update_post);

// skin INSTANCE //
router.get("/skin_instances", skin_instance_controller.index);
router.get("/skin_instance/create", skin_instance_controller.skin_instance_create_get);
router.get("/skin_instance/:id/delete", skin_instance_controller.skin_instance_delete_get);
router.get("/skin_instance/:id/update", skin_instance_controller.skin_instance_update_get);
router.post("/skin_instance/create", skin_instance_controller.skin_instance_create_post);
router.post("/skin_instance/:id/delete", skin_instance_controller.skin_instance_delete_post);
router.post("/skin_instance/:id/update", skin_instance_controller.skin_instance_update_post);


module.exports = router;
