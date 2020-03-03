const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guildSchema = new Schema({
    // _id: { type: String, required: true },
    guildName: { type: String, required: true },
    serverName: { type: String, required: true},
    guildMasterID: { type: String, required: true}
});

const Guild = mongoose.model("Guild", charSchema);

module.exports = Guild;