
// express.js

var express = require('express');
var path = require('path'); 
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
    
module.exports = function(rootPath) {    
    var app  = express();  
    var appDir = path.dirname(require.main.filename); 
    
    console.log(appDir);

    // configuration
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride());
    app.use(express.static('public')); 
    app.set("views", path.join(appDir, '/public/views'));
    app.set("index",  path.join(appDir, '/public/index.html'));    

    // routes 
    require('../routes/defaultRoute.js')(app);
    require('../routes/pacienteRoute.js')(app);    
 
    return app;
}  