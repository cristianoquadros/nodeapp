// app/routes.js

module.exports = function(app) {
    var PacienteModel = require('../models/pacienteModel.js');
    var urlBase="/patient/";

    app   
    .get(urlBase + 'list', function(req, res) {
        console.log('Call Rest Function');
               
        PacienteModel.find({}, function (err, pacientes) {
             if (err) {
                 return console.error(err); 
             }
             res.json(pacientes);
         });                
    })
    
    .post(urlBase +'save', function(req, res) {
        console.log('Call Rest Function');
        
        var paciente = new PacienteModel(req.query);
        paciente.save(function (err, paciente) {
             if (err){
                 return console.error(err);  
             }
        })    
    })    
 };