const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
    name: {type: String},
    min_price: {type: Number},
    max_price: {type: Number},
});

WeaponSchema.virtual("url").get(function() {
    return `/weapon/${this._id}`;
});

module.exports = mongoose.model("Weapon", WeaponSchema);
