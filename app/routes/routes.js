// app/routes.js

module.exports = function(app) {

    app
    .get('/teste/', function(req, res) {
        console.log('Call Rest Function');
        
        res.json({nome:req.query.nome+"Ok", 
            telefone:req.query.fone+"99"});
    })
    
    .get('/patient/list', function(req, res) {
        console.log('Call Rest Function');
        
        var Paciente = require('./models/paciente');
        
	    Paciente.find(function(err, todos) {
			if (err){
				res.send(err);
            }
			res.json(todos);
		});        
        
        var result = '[' +
        '{ "name":"John Lennon" , "age":45, "record":5},' +
        '{ "name":"Elvis Presley" , "age":4,"record":5 },' +
        '{ "name":"Tim Morrison" , "age":33, "record":5 }]';        
        
        res.json(JSON.parse(result));
    })  
    
    .get('/research/', function(req, res) {
        console.log('Call Rest Function');
        
        var result = '[' +
        '{ "researchName":"John Lennon" , "researchId":4544},' +
        '{ "researchName":"Elvis Presley" , "researchId":4333},' +
        '{ "researchName":"Tim Morrison" , "researchId":33444}]';        
        
        res.json(JSON.parse(result));
    });      
 };
