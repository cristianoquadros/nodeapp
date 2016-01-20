// app/routes.js


// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/teste', function(req, res) {

        console.log('Chamando teste')

    });

};
