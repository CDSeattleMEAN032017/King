let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var answerSchema = mongoose.Schema({
    _user: String,
    content: {type: String, required: true, minlength: 5},
    support: {type: String, required: false},
    likes: Number,
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
})

mongoose.model('Answer', answerSchema);
