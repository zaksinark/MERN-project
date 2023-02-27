const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is a required field."],
            minlength: [3, "{PATH} must be {MINLENGTH} characters long."]
        },
        storenum: {
            type: Number,
            required: [true, "{PATH} is a required field."],
            min: [1, "{PATH} must be atleast {MIN}."]
        },
        open: {
            type: Boolean,
            default : false
        },
    },
    {timestamps: true})

const Exam = mongoose.model("Exam", ExamSchema);

module.exports = Exam;