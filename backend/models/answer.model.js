// Answer model that represents an answer with one number value.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    value: { type: Number, required: true }
}, {
    timestamps: true,
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;