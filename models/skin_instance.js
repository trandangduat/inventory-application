const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkinInstanceSchema = new Schema({
    skin: {type: Schema.Types.ObjectId, ref: "Skin"},
    wear_condition: {
        type: String,
        enum: ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"],
    },
    float: {type: Number},
    price: {type: Number},
});

SkinInstanceSchema.virtual("url").get(function() {
    return `/skin_instance/${this._id}`;
});

module.exports = mongoose.model("SkinInstance", SkinInstanceSchema);


