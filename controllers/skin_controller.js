const Skin = require("../models/skin");
const asyncHandler = require("express-async-handler");

exports.skins_list = asyncHandler(async (req, res, next) => {
    const skinsList = await Skin.find({ weapon: req.params.id }).exec();
    res.render("skin/skinlist", { skinsList: skinsList });
});

exports.skin_create_get = asyncHandler(async (req, res, next) => {
    res.send("skin CREATE GET...");
});

exports.skin_create_post = asyncHandler(async (req, res, next) => {
    res.send("skin CREATE POST...");
});

exports.skin_delete_get = asyncHandler(async (req, res, next) => {
    res.send("skin DELETE GET...");
});

exports.skin_delete_post = asyncHandler(async (req, res, next) => {
    res.send("skin DELETE POST...");
});

exports.skin_update_get = asyncHandler(async (req, res, next) => {
    res.send("skin UPDATE GET...");
});

exports.skin_update_post = asyncHandler(async (req, res, next) => {
    res.send("skin UPDATE POST...");
});