// app/routes.js

module.exports = function(app) {

    app.get('/teste/', function(req, res) {
        console.log('Chamando teste');
        
        res.json({nome:req.query.nome+"Ok", 
            telefone:req.query.fone+"99"});
    });
 };
