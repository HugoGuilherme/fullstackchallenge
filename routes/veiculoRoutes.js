const { Router } = require('express')
const VeiculoController = require('../controllers/veiculoController')
const router = Router()
router
    .get('/veiculos', VeiculoController.pegarVeiculos)
    .get('/veiculoUnico/:id', VeiculoController.pegarUmVeiculo)
    .post('/veiculo', VeiculoController.adicionarVeiculo)
    .post('/veiculoAtualizacao/:id', VeiculoController.atualizaVeiculo)
    .post('/veiculoDelete/:id', VeiculoController.apagaVeiculo)

module.exports = router