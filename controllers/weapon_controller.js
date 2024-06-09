const Weapon = require("../models/weapon");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const weaponsList = await Weapon.find().exec();
    res.render("index", { weaponsList: weaponsList });
});