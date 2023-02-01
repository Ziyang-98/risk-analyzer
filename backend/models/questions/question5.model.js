// Q5: Implied Risk Aversion
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const q5Schema = new Schema({
    p1: { type: Number, required: true },  // 10% SD
    p2: { type: Number, required: true },  // 20% SD
    p3: { type: Number, required: true },  // 30% SD
}, {
    timestamps: true,
});

const Q5 = mongoose.model('Q5', q5Schema);

module.exports = Q5;