const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema ({
    id: {
        type: id,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        required: true
    }
}, {timestamps:true});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;