const Weapon = require("../models/weapon");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.render("index", { title: "Weapon" });
});