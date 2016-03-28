var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var templateSchema = new Schema({
	name :  { type: String, required: true, unique: true },
    description : String,
    code : String,
    created_at: Date,
    updated_at: Date    
});

templateSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at){
        this.created_at = currentDate;
    }
    next();
});

var template = mongoose.model('Template', templateSchema);
module.exports = template;