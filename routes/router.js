const express= require('express')
const {vistaPrincipal, vistaTables, vistaNotificaciones} = require('../controllers/PageControllers')
const router = express.Router()

router.get('/', vistaPrincipal)
router.get('/tables', vistaTables)
router.get('/notificaciones', vistaNotificaciones)



module.exports = {routes :router}
