var http = require('http');
var app = require('./app/config/express');
var mongoose = require('./app/config/mongoose.js');

mongoose.connect();

// Openshift
const serverUrl = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
const serverPort = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// listen 
app.listen(serverPort, serverUrl, function() {
    console.log('%s: Node server started on %s:%d ...', Date(Date.now() ), serverUrl, serverPort);
});     