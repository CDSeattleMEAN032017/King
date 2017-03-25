let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var questionSchema = mongoose.Schema({
    name: {type: Schema.Types.ObjectId, ref:'User'},
    title: {type: String, required: true, minlength: 10},
    desc: {type: String, required: false},
    _answers: [{type: Schema.Types.ObjectId, ref:'Answer'}],
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
})

mongoose.model('Question', questionSchema);
