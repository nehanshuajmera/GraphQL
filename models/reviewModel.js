import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    gameId: {
        type: Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
}, {timestamps: true});

export const Review = mongoose.model('Review', reviewSchema);