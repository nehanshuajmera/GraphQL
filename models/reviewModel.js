const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: {
        type: id,
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;