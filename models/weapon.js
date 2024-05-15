const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
    name: {type: String},
    type: {type: Schema.Types.ObjectId, ref: "WeaponType"},
    min_price: {type: Number},
    max_price: {type: Number},
});

WeaponSchema.virtual("url").get(function() {
    return `/weapons/${this._id}`;
});

module.exports = mongoose.model("Weapon", WeaponSchema);