const router = require('express').Router()
const controllerVeiculo = require('../controllers/veiculo')




router.get('/veiculo', controllerVeiculo.get)
router.post('/veiculo', controllerVeiculo.post)


export default router