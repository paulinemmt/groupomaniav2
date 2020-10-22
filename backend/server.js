//////////////////////SERVEUR///////////////////////////////////

const http = require('http'); //importation package http de Node
const app = require('./app'); //importation du fichier app.js

//renvoit un port valide sous forme de chaine ou de numéro
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


// Cherche erreur et les gère, les garde dans server
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app); // création du serveur à partir du fichier app.js

//configuration du serveur
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

//mise en marche du serveur
server.listen(port);



// //imports
// const express = require('express');
// const bodyParser = require('body-parser');
// const apiRouter = require('./app').router;

// //Instanciate server
// const server = express();


// //Body Parser configuration
// server.use(bodyParser.urlencoded({extended: true }));
// server.use(bodyParser.json());

// //Configure routes
// server.get('/', function (req, res){
//     res.setHeader('Content-Type','text/html');
//     res.status(200).send('<h1>Bonjour sur mon serveur</h1>');
// });

// server.use('/api/',apiRouter )

// //Launch server
// server.listen(8080, function() {
//     console.log('Server en écoute : ')
// })