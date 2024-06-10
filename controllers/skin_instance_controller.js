const SkinInstance = require("../models/skin_instance");
const asyncHandler = require("express-async-handler");

exports.skin_instances_list = asyncHandler(async (req, res, next) => {
    const skinInstancesList = await SkinInstance.find({ skin: req.params.id }).populate("skin").exec();
    res.render("skin/skininstance", { skinInstancesList: skinInstancesList } );
});

exports.skin_instance_create_get = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE CREATE GET...");
});

exports.skin_instance_create_post = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE CREATE POST...");
});

exports.skin_instance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE DELETE GET...");
});

exports.skin_instance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE DELETE POST...");
});

exports.skin_instance_update_get = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE UPDATE GET...");
});

exports.skin_instance_update_post = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE UPDATE POST...");
});
