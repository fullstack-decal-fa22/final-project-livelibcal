const express = require("express");
const router = express.Router()
const User = require("./models/User");
const Library = require("./models/Library");
const Review = require("./models/Reviews");


User.collection.deleteMany({});
Library.collection.deleteMany({});
Review.collection.deleteMany({});
module.exports = router
