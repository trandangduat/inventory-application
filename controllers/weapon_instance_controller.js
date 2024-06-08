const Weapon = require("../models/weapon_instance");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send("WEAPON INSTANCES LIST...");
});

exports.weapon_instance_create_get = asyncHandler(async (req, res, next) => {
    res.send("WEAPON INSTANCE CREATE GET...");
});

exports.weapon_instance_create_post = asyncHandler(async (req, res, next) => {
    res.send("WEAPON INSTANCE CREATE POST...");
});

exports.weapon_instance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("WEAPON INSTANCE DELETE GET...");
});

exports.weapon_instance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("WEAPON INSTANCE DELETE POST...");
});

exports.weapon_instance_update_get = asyncHandler(async (req, res, next) => {
    res.send("WEAPON INSTANCE UPDATE GET...");
});

exports.weapon_instance_update_post = asyncHandler(async (req, res, next) => {
    res.send("WEAPON INSTANCE UPDATE POST...");
});
