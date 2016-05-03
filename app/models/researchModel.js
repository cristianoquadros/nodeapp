var mongoose = require('mongoose');
var templateSchema = require('./templateModel.js');
var Schema = mongoose.Schema;

// create a schema
var researchSchema = new Schema({
    result: Object,
    template : { type: Schema.Types.ObjectId, ref: 'Template' },
    status: String,
    comment: String,
    groups: [String],
    user: String,
    created_at: Date,
    updated_at: Date    
});

researchSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at){
        this.created_at = currentDate;
    }
    next();
});

var Research = mongoose.model('Research', researchSchema);
module.exports = Research;