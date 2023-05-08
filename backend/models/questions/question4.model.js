// Q4: Bomb game
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const q4Schema = new Schema({
    p1: { type: Number, required: true },  // 10% SD
    p2: { type: Number, required: true },  // 20% SD
    p3: { type: Number, required: true },  // 30% SD
}, {
    timestamps: true,
});

const Q4 = mongoose.model('Q4', q4Schema);

module.exports = Q4;