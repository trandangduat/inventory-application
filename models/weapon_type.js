const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeaponTypeSchema = new Schema({
    name: {type: String},
    min_price: {type: Number},
    max_price: {type: Number},
});

WeaponTypeSchema.virtual("url").get(function() {
    return `/weapon_types/${this._id}`;
});

module.exports = mongoose.model("WeaponType", WeaponTypeSchema);
