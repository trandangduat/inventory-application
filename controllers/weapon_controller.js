const Weapon = require("../models/weapon");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send("WEAPON LIST...")
});

exports.weapon_create_get = asyncHandler(async (req, res, next) => {
    res.send("WEAPON CREATE GET...");
});

exports.weapon_create_post = asyncHandler(async (req, res, next) => {
    res.send("WEAPON CREATE POST...");
});

exports.weapon_delete_get = asyncHandler(async (req, res, next) => {
    res.send("WEAPON DELETE GET...");
});

exports.weapon_delete_post = asyncHandler(async (req, res, next) => {
    res.send("WEAPON DELETE POST...");
});

exports.weapon_update_get = asyncHandler(async (req, res, next) => {
    res.send("WEAPON UPDATE GET...");
});

exports.weapon_update_post = asyncHandler(async (req, res, next) => {
    res.send("WEAPON UPDATE POST...");
});