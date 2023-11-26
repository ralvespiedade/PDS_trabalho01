const router = require('express').Router()
const controllerComputador = require('../controllers/computador')




router.get('/maquinas', controllerComputador.get)
router.post('/maquinas', controllerComputador.post)
router.put('/maquinas/:id', controllerComputador.put)


export default router