
// express.js

var express = require('express');
var path = require('path'); 
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
    
var moduleExpress = function() {    
    var app  = express();  
    var appDir = path.dirname(require.main.filename); 

    // configuration
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride());
    app.use(express.static('public')); 
    app.use('/bower_components',   express.static(path.join(appDir,'/bower_components')));
    
    app.set("views", path.join(appDir, '/public/views'));
    app.set("index",  path.join(appDir, '/public/index.html')); 


    // routes 
    require('../routes/defaultRoute.js')(app);
    require('../routes/pacienteRoute.js')(app);    
    require('../routes/templateRoute.js')(app);  
 
    return app;
}  

module.exports = moduleExpress();