var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var patientSchema = new Schema({
	name :  { type: String, required: true, unique: true },
    code : String,
    birth : Date,
    created_at: Date,
    updated_at: Date    
});

patientSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at){
        this.created_at = currentDate;
    }
    next();
});

var Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;