const mongoose = require("mongoose");
const LibraySchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    full_name: {
        type: String,
        required: true 
    },
    open_time: {
        type: Number,
        required: true 
    },
    close_time: {
        type: Number,
        required: true 
    },
    latitude: {
        type: Number,
        required: true 
    },
    longitude: {
        type: Number,
        required: true 
    },
    short_description: {
        type: String,
        required: true
    },
    long_description: {
        type: String,
        required: true
    },
    image1_link: {
        type: String,
        required: true
    },
    image2_link:{
        type: String,
        required: true
    },
    total_rate:{
        type: Number,
        default: 0
    },
    total_reviews:{
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    venue_id: {
        type: String
    },
    base_noise_level: {
        type: Number
    },
    current_hour: {
        type: Number,
        default: new Date().getHours()
    },
    busyness_info: {
        type: mongoose.Schema.Types.Mixed,
        default: "No info"
    },
    is_open:{
        type: Number,
        default: 1
    }

})

module.exports = mongoose.model("library", LibraySchema)