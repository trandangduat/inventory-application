const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkinSchema = new Schema({
    name: {type: String},
    weapon: {type: Schema.Types.ObjectId, ref: "Weapon"},
    min_price: {type: Number},
    max_price: {type: Number},
});

SkinSchema.virtual("url").get(function() {
    return `/skin/${this._id}`;
});

module.exports = mongoose.model("Skin", SkinSchema);