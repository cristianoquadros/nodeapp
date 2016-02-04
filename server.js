/* global __dirname */
    // set up 
    var express   = require('express');
    var fs        = require('fs');
    var app       = express(); 
    var mongoose = require('mongoose');                
    var morgan   = require('morgan');                // log requests to the console (express4)
    var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    var methodOverride = require('method-override');    
    
    // Openshift
    var ipaddress = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
    var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;
    var dbUrl     = process.env.OPENSHIFT_MONGODB_DB_URL || 'localhost:27017';
    var appName   = process.env.OPENSHIFT_APP_NAME || '/nodeapp';


    // configuration
    app.use(express.static(__dirname + '/public'));         // set the static files location /public/img will be /img for users;
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());    

    // database
    mongoose.connect(dbUrl + appName); 	
    var db = mongoose.connection;
    db.once('open', function() {
        console.log('Mongo DB connect');
    });

    // routes 
    require('./app/routes/defaultRoute.js')(app);
    require('./app/routes/pacienteRoute.js')(app);    

    // listen 
    app.listen(port, ipaddress, function() {
        console.log('%s: Node server started on %s:%d ...', Date(Date.now() ), ipaddress, port);
    }); 
    