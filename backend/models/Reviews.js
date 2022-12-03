const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    library: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true // Have to be exist when creating new user.
    },
    rate: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("review", ReviewSchema);