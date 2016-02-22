/* global __dirname */
    // set up 
    var http = require('http');
    var express = require('express');
    var path = require('path');   
    var logger = require('morgan');
    var methodOverride = require('method-override');
    var bodyParser = require('body-parser');
    var errorHandler = require('errorhandler');
    var mongoose = require('mongoose'); 
    var app       = express();   
    
    // Openshift
    const ipaddress = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
    const port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;
    const dbUrl     = process.env.OPENSHIFT_MONGODB_DB_URL || 'localhost:27017';
    const appName   = process.env.OPENSHIFT_APP_NAME || '/nodeapp';
    const _dirroute = path.join(__dirname, "app/routes");

    // configuration
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride());
    app.use(express.static(path.join(__dirname + '/public'))); 
    app.set("views", path.join(__dirname, "public/views"));
    app.set("index", path.join(__dirname, "public/index.html"));    

    // database
    mongoose.connect(dbUrl + appName); 	
    var db = mongoose.connection;
    db.once('open', function() {
        console.log('Mongo DB connect');
    });
    
    // error handling middleware should be loaded after the loading the routes
    if ('development' == app.get('env')) {
         app.use(errorHandler());
    }    

    // routes 
    require(_dirroute + '/defaultRoute.js')(app);
    require(_dirroute + '/pacienteRoute.js')(app);    

    // listen 
    app.listen(port, ipaddress, function() {
        console.log('%s: Node server started on %s:%d ...', Date(Date.now() ), ipaddress, port);
    });     