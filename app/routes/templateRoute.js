// app/routes.js

module.exports = function(app) {
    var templateModel = require('../models/templateModel.js');

    app   
    .get('/template/list', function(req, res) {              //find all
        console.log('Call Rest Function');
               
        templateModel.find({}, function (err, templates) {
             if (err) {
                 return console.error(err); 
             }
             res.json(templates);
         });                
    })
    
    .post('/template/save', function(req, res) {          //save
        console.log('Call Create Rest Function' + req.query);
        
        var template = new templateModel(req.query);
        template.save(function (err, template) {
             if (err) {
                 return console.error(err); 
             }
            console.log('Template saved!');
        })    
    })
    
   .put('/template/', function(req, res) {           //update
        console.log('Call Rest Function');
        
        templateModel.findByIdAndUpdate(req.query.id, req.query, function(err, template) {
            if (err) throw err;
            console.log('Template Updated!');
        }) 
    })   

    
    .delete('/template/', function(req, res) {
        console.log('Call Rest Function');
        
        templateModel.findByIdAndRemove(req.query.id, function(err) {
            if (err) throw err;
            console.log('Template deleted!');
        });
    })      
 };