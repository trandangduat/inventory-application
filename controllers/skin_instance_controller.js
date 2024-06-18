const SkinInstance = require("../models/skin_instance");
const Weapon = require("../models/weapon");
const Skin = require("../models/skin");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.skin_instances_list = asyncHandler(async (req, res, next) => {
    const skinInstancesList = await SkinInstance.find({ skin: req.params.id }).populate("skin").exec();
    const skinName = (!skinInstancesList.length ? "No name" : skinInstancesList[0].skin.name);
    res.render("skin/instance/list", { 
        skinInstancesList: skinInstancesList,
        skinName: skinName,
    });
});

exports.skin_instance_create_get = asyncHandler(async (req, res, next) => {
    const weaponsList = await Weapon.find().exec();
    res.render("skin/instance/create", {
        title: "Add a new skin",
        weaponsList: weaponsList,
    });
});

function getWearConditionFromFloatValue (float) {
    let wear = "";
    if (float >= 0 && float < 0.07) {
        wear = "Factory New";
    } else if (float >= 0.07 && float < 0.15) {
        wear = "Minimal Wear";
    } else if (float >= 0.15 && float < 0.37) {
        wear = "Field-Tested";
    } else if (float >= 0.37 && float < 0.45) {
        wear = "Well-Worn";
    } else if (float >= 0.45 && float <= 1) {
        wear = "Battle-Scarred";
    }
    return wear;
}

exports.skin_instance_create_post = [
    body("skin-name", "Name must not be empty!")
        .trim()
        .isLength({ min : 1 })
        .escape(),
    body("float", "Float value must range from 0 to 1")
        .isFloat({ min: 0, max: 1 })
        .escape(),
    body("price", "Price must be a positive number")
        .isFloat({ min: 0 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        const weaponsList = await Weapon.find().exec();
        if (!errors.isEmpty()) {
            res.render("skin/instance/create", {
                title: "Add a new skin",
                weaponsList: weaponsList,
                errors: errors.array(),
            });
        }
        else {
            const skinExisted = await Skin.findOne({ name: req.body["skin-name"] }) 
                                            .collation({ locale: "en", strength: 2 })
                                            .exec();
            let newSkin;
            if (!skinExisted) {
                newSkin = new Skin({
                    name: req.body["skin-name"],
                    weapon: req.body["weapon-id"],
                });
                await newSkin.save();
            }
            const newSkinInstance = new SkinInstance({
                skin: (skinExisted ? skinExisted : newSkin),
                float: req.body.float,
                price: req.body.price,
                wear_condition: getWearConditionFromFloatValue(req.body.float),
            });
            await newSkinInstance.save();
            res.redirect(newSkinInstance.url);
        }
    }),
];

exports.skin_instance_delete_get = asyncHandler(async (req, res, next) => {
    const instance = await SkinInstance.findById(req.params.id).populate("skin").exec();
    res.render("skin/instance/detail", {
        instance: instance,
        deleteConfirmation: true,
    });
});

exports.skin_instance_delete_post = asyncHandler(async (req, res, next) => {
    const skinInstance = await SkinInstance.findById(req.params.id).exec();
    const skin = await Skin.findById(skinInstance.skin).exec();
    if (skinInstance) {
        await skinInstance.deleteOne();
        res.redirect(skin.url);
    }
});

exports.skin_instance_update_get = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE UPDATE GET...");
});

exports.skin_instance_update_post = asyncHandler(async (req, res, next) => {
    res.send("skin INSTANCE UPDATE POST...");
});

exports.skin_instance_detail = asyncHandler(async (req, res, next) => {
    const instance = await SkinInstance.findById(req.params.id).populate("skin").exec();
    res.render("skin/instance/detail", {
        instance: instance,
    });
});