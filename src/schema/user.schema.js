const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const userSchema = new Schema({
    name: String,
});


module.exports = mongoose.model('User', userSchema);