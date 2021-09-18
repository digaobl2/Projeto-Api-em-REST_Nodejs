const atendimentos = require('../models/atendimentos')

module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        atendimentos.lista(res)
    })
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        atendimentos.buscaPorId(id, res)
    })
    app.post("/atendimentos", (req, res) => {
        const Atendimento = req.body
        atendimentos.adiciona(Atendimento, res)
    })
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        atendimentos.altera(id, valores, res)
    })
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        atendimentos.deleta(id, res)
    })
}