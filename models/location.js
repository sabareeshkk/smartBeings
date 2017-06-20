const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    lat: Number,
    long: Number
});

module.exports = mongoose.model('Locations', LocationSchema);