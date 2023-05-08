// Q5: Implied Risk Aversion
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const q5Schema = new Schema({
    avgOpenedBoxes: { type: Number, required: true },
    avgValueReceived: { type: Number, required: true },
}, {
    timestamps: true,
});

const Q5 = mongoose.model('Q5', q5Schema);

module.exports = Q5;