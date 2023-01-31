const express = require('express')

class Servidor {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de la aplicacion
        this.rutas();
    }

    middlewares(){
        // Directorio publico
        this.app.use(express.static('public'));
    }

    rutas() {
        this.app.get('/api', (req, res) => {
            res.send('Hello World')
          })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('El servidor se encuentra corriendo en el puerto:', this.port)
        })
    }
}

module.exports = Servidor;