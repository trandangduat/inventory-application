const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeaponInstanceSchema = new Schema({
    weapon: {type: Schema.Types.ObjectId, ref: "Weapon"},
    wear_condition: {
        type: String,
        enum: ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"],
        default: ":P",
    },
    float: {type: Number},
    price: {type: Number},
});

WeaponInstanceSchema.virtual("url").get(function() {
    return `/weapon_instances/${this._id}`;
});

module.exports = mongoose.model("WeaponInstance", WeaponInstanceSchema);


