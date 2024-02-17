const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    id: {
        type: id,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    platform: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;