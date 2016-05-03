var mongoose = require('mongoose');
var researchSchema = require('./researchModel.js');
var Schema = mongoose.Schema;

// create a schema
var patientSchema = new Schema({
	alias :  { type: String, required: true},
    code : String,
    birth : Date,
    comment : String,
    origin: String,
    contact: String,
    user: String,
    created_at: Date,
    updated_at: Date,
    researches : [researchSchema]  
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