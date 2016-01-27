// set up 
    var express  = require('express');
    var app      = express();                
    var port     = process.env.PORT || 3000;    // set the port


    // configuration 

    app.use(express.static(__dirname + '/public'));         // set the static files location /public/img will be /img for users;

    // routes 
    require('./app/routes/routes.js')(app);

    // listen 
    app.listen(port);
    console.log("App listening on port " + port);
    