let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
})

mongoose.model('User', userSchema);
