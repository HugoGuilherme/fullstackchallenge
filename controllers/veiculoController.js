const database = require("../db/models");
const { Op } = require('sequelize')

module.exports = class VeiculoController {
    static async pegarVeiculos(req, res) {
        try {
            let search = ''

            if (req.query.search) {
                search = req.query.search
            }
            const veiculosCadastrados = await database.Veiculos.findAll({
                where: {
                    id: { [Op.like]: `%${search}%` }
                }
            });
            const veiculos = veiculosCadastrados.map((result) => result.dataValues);

            return res.render('home.handlebars', { veiculos })
            //status(200).json({ veiculos })
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async pegarUmVeiculo(req, res) {
        const { id } = req.params
        try {
            const umVeiculo = await database.Veiculos.findOne({
                where: {
                    id: Number(id)
                }, raw: true
            })
            return res.render('veiculos/atualizacao.handlebars', { umVeiculo })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async adicionarVeiculo(req, res) {
        const novoVeiculo = req.body
        console.log(novoVeiculo);
        try {
            const novoVeiculoCriado = await database.Veiculos.create(novoVeiculo)
            return res.redirect("http://localhost:3000/veiculos")
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaVeiculo(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Veiculos.update(novasInfos, { where: { id: Number(id) } })
            const VeiculoAtualizado = await database.Veiculos.findOne({ where: { id: Number(id) } })
            return res.redirect("http://localhost:3000/veiculos")
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaVeiculo(req, res) {
        const { id } = req.params
        try {
            await database.Veiculos.destroy({ where: { id: Number(id) } })
            return res.redirect("http://localhost:3000/veiculos")

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}