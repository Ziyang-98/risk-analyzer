// Question 2: Preferred Choice
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const q2Schema = new Schema({
    value: { type: Number, required: true }  // Should be from 1-6
}, {
    timestamps: true,
});

const Q2 = mongoose.model('Q2', q2Schema);

module.exports = Q2;