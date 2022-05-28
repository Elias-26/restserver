
const { Router } = require('express');

const { usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete } = require('../controllers/usuarios');

const routes = Router();


routes.get('/', usuariosGet);

routes.put ('/:id', usuariosPut);

routes.post ('/', usuariosPost);

routes.patch ('/', usuariosPatch);
 
routes.delete ('/', usuariosDelete);


module.exports = routes;









