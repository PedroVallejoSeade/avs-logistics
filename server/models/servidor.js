const express = require('express')

class Servidor {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares

        // Rutas de la aplicacion
        this.rutas();
    }

    middlewares(){
        
    }

    rutas() {
        this.app.get('/', (req, res) => {
            res.send('Hello World')
          })
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('El servidor se encuentra corriendo en el puerto:', process.env.PORT)
        })
    }
}

module.exports = Servidor;