import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const authorSchema = new Schema ({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    name:{
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        required: true
    }
}, {timestamps:true});

export const Author = mongoose.model('Author', authorSchema);