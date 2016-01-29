// set up 
    var express   = require('express');
    var fs        = require('fs');
    var app       = express();                
    var ipaddress = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
    var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;


    // configuration 

    app.use(express.static(__dirname + '/public'));         // set the static files location /public/img will be /img for users;

    // routes 
    require('./app/routes/routes.js')(app);

    // listen 
    app.listen(port, ipaddress, function() {
        console.log('%s: Node server started on %s:%d ...',
                    Date(Date.now() ), ipaddress, port);
    });    
    console.log("App listening on port " + port);
    