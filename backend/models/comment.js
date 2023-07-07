const mongoose = require("mongoose");

const {Schema} = mongoose;


const commentSchema = new Schema({
    author: {type: mongoose.SchemaType.ObjectId, ref: "users"},
    blog: {type: mongoose.SchemaType.ObjectId, ref: "blogs"},
    content: {type: String, require: true},
}, {
    timestamps: true
})


module.exports = mongoose.module("comment", commentSchema, "comments");