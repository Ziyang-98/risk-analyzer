// Stores relevant user data for one user.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    age: { type: Number, required: true },
    gender: { type: String, required: true }, 
    ethnicity: {type: String, required: true},
    education: { type: String, required: true }, 
    marital: { type: String, required: true }, 
    mental: { type: String }, 
    contact: {type: Number}
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;