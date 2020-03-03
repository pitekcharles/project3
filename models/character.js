const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charSchema = new Schema({
    // _id: { type: String, required: true },
    characterName: { type: String, required: true },
    serverName: { type: String, required: true},
    class: { type: String, required: true},
    userID: { type: String, required: true},
    attendenceOnTime: { type: String, required: true },
    attendenceLate: { type: String, required: true },
    attendenceAbsent: { type: String, required: true},
    attendenceLeftEarly: { type: String, required: true}
});

const Character = mongoose.model("Character", charSchema);

module.exports = Character;