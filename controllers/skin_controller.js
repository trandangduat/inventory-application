const Skin = require("../models/skin");
const Weapon = require("../models/weapon");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.skins_list = asyncHandler(async (req, res, next) => {
    const skinsList = await Skin.find({ weapon: req.params.id }).exec();
    res.render("skin/list", { 
        skinsList: skinsList,
    });
});

exports.skin_delete_get = asyncHandler(async (req, res, next) => {
    res.send("skin DELETE GET...");
});

exports.skin_delete_post = asyncHandler(async (req, res, next) => {
    res.send("skin DELETE POST...");
});
