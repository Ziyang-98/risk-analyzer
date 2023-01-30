// Q4: Bomb game
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const q4Schema = new Schema({
    avgOpenedBoxes: { type: Number, required: true },
    avgValueReceived: { type: Number, required: true }
}, {
    timestamps: true,
});

const Q4 = mongoose.model('Q4', q4Schema);

module.exports = Q4;