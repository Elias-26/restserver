const { response } = require('express');


const usuariosGet = (req = request, res = response) => {

    const{q, nombre = 'No Name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre, 
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

        res.json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
        
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params; 

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador '
    });
}





module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}