const mongoose = require("mongoose");

const {Schema} = mongoose;


const commentSchema = new Schema({
    author: {type: mongoose.SchemaType.ObjectId, ref: "User"},
    blog: {type: mongoose.SchemaType.ObjectId, ref: "Blog"},
    content: {type: String, require: true},
}, {
    timestamps: true
})


module.exports = mongoose.module("comment", commentSchema, "comments");