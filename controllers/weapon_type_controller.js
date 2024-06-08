const Weapon = require("../models/weapon_type");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    // res.send("WEAPON TYPES LIST...");
    res.render("index", { title: "Weapon Types" });
});