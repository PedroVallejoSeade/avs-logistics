const express = require('express')
const cors = require('cors')

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
        // CORS
        this.app.use(cors())
        
        // Directorio publico
        this.app.use(express.static('public'));
    }

    rutas() {
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
            })
          })

          this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API'
            })
          })

          this.app.post('/api', (req, res) => {
            res.json({
                msg: 'post API'
            })
          })

          this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
            })
          })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('El servidor se encuentra corriendo en el puerto:', this.port)
        })
    }
}

module.exports = Servidor;