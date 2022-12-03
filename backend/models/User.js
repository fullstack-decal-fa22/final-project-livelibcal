const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true // Have to be exist when creating new user.
    },
    email: {
        type: String,
        required: true // Have to be exist when creating new user.
    },
    password: {
        type: String,
        required: true // Have to be exist when creating new user.
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("user", UserSchema);
