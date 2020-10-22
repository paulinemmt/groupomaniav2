//imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./app').router;

//Instanciate server
const server = express();

//CORS error
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Body Parser configuration
server.use(bodyParser.urlencoded({extended: true }));
server.use(bodyParser.json());

//Configure routes
server.get('/', function (req, res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>');
});

server.use('/api/',apiRouter )

//Launch server
server.listen(8080, function() {
    console.log('Server en écoute : ')
})