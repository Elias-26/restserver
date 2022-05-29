

/*es la estructura de un res-server */
const express = require('express');
const cors = require('cors');

class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middleweares:es una funcion que siempre va a ejecutarse cuando nosotros levantamos nuesto server
        this.middlewares();

        //rutas de mi aplicacion 
        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body 
        this.app.use( express.json() ); 

        //directorio publico 
        this.app.use( express.static('public') );

    }
    /*son las rutas que va a tener la app */
    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
    }

    /* esta parte es paque este escuchando la app*/
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}



module.exports = Server; 
