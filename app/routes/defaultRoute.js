// app/routes.js

module.exports = function(app) {
    app.get('/', function(req, res) {
        console.log('Init session');
        res.sendFile(app.get("index"));
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
