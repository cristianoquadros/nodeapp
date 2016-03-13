var http = require('http');
var http = require('http');
var app = require('./app/config/express')();
require('./app/config/mongoose.js')();

// Openshift
const ipaddress = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
const port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// listen 
app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...', Date(Date.now() ), ipaddress, port);
});     