const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    res.json({
        msg: 'get API - controlador' 
    });
}

const usuariosPost = (req = request, res = response) => {
    const body = req.body;
    
    res.json({
        msg: 'post API - controlador',
        body
    });
}

const usuariosPut = (req = request, res = response) => {
    const body = req.body;
    
    res.json({
        msg: 'put API - controlador' ,
        body
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controlador' 
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}