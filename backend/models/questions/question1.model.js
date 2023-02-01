// Question 1: Valuation
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const q1Schema = new Schema({
    p1: { type: Number, required: true },  // 50% $100, 50% $0 
    p2: { type: Number, required: true },  // 20% $70,  30% $50, 50% $40
    p3: { type: Number, required: true },  // 15% $130, 33% $60, 52% $20 
    p4: { type: Number, required: true },  // 10% $160, 23% $60, 67% $30
    p5: { type: Number, required: true },  // 5%  $200, 42% $50, 53% $36 
    avg: {type: Number, required: true}
}, {
    timestamps: true,
});

const Q1 = mongoose.model('Q1', q1Schema);

module.exports = Q1;