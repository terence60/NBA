const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('User', UserSchema);