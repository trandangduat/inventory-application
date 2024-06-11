const Skin = require("../models/skin");
const Weapon = require("../models/weapon");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.skins_list = asyncHandler(async (req, res, next) => {
    const skinsList = await Skin.find({ weapon: req.params.id }).exec();
    res.render("skin/skinlist", { 
        skinsList: skinsList,
    });
});

exports.skin_create_get = asyncHandler(async (req, res, next) => {
    const weaponsList = await Weapon.find().exec();
    res.render("skin/skincreateform", {
        title: "Create a new skin",
        weaponsList: weaponsList,
    });
});

exports.skin_create_post = [
    body("skin-name", "Name must not be empty!")
        .trim()
        .isLength({ min : 1 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const newSkin = new Skin({
                name: req.body["skin-name"],
                weapon: req.body["weapon-id"],
            });
            const skinExisted = await Skin.findOne({ name: req.body["skin-name"] }) 
                                            .collation({ locale: "en", strength: 2 })
                                            .findOne({ weapon: req.body["weapon-id"] })
                                            .exec();
            if (skinExisted) {
                res.redirect(skinExisted.url);
                console.log("Skin already existed");
            }
            else {
                await newSkin.save();
                res.redirect(newSkin.url);
                console.log("Create skin successfully");
            }
        }
        else {
            res.render("skin/skincreateform", {
                title: "Create a new skin",
                errors: errors.array(),
            });
        }
    }),
];

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