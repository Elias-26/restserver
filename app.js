/*NOTA:las importaciones propias de node como
require('fs')
require('http) 
estas van antes que las de terceros*/
require('dotenv').config();

const Server =require('./models/server');

const server = new Server();


server.listen(); 
