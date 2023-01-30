// Question 3: Fixed endowment
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const q3Schema = new Schema({
    p1: { type: Number, required: true },  // 100% chance of 5% return 
    p2: { type: Number, required: true },  // 80% chance of 50% return,   20% chance to be 0 
    p3: { type: Number, required: true },  // 60% chance of 100% return,  40% chance to be 0 
    p4: { type: Number, required: true },  // 40% chance of 500% return,  60% chance to be 0 
    p5: { type: Number, required: true },  // 10% chance of 2000% return, 90% chance to be 0 
}, {
    timestamps: true,
});

const Q3 = mongoose.model('Q3', q3Schema);

module.exports = Q3;