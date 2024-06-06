// models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
const APP_URL = process.env.APP_URL || 'mongodb://127.0.0.1:27017/User';
mongoose.connect(APP_URL);
module.exports = mongoose.model('User', userSchema);
