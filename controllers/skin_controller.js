const Skin = require("../models/skin");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send("skin LIST...")
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