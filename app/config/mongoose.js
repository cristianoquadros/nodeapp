var mongoose = require('mongoose');

mongoose.set('debug',true);

const dbUrl     = process.env.OPENSHIFT_MONGODB_DB_URL || 'localhost:27017';
const appName   = process.env.OPENSHIFT_APP_NAME || '/nodeapp';

module.exports = function() {  
    var uri = dbUrl + appName;
    mongoose.connect(uri); 	
    
    var db = mongoose.connection;    
    db.once('open', function() {
        console.log('Mongo DB connect: ' + appName);
    });
    
    db.on('disconnected', function() {
        console.log('Mongoose! Desconectado de ' + uri);
    });
    
    db.on('error', function(erro) {
        console.log('Mongoose! Erro na conexão: ' + erro);
    });
    
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose! Desconectado pelo término da aplicação ');
            // 0 indica que a finalização ocorreu sem erros
            process.exit(0);
        });
    });  
    
}    