const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const date = new Date();
    let reserva = {
        tipo: req.body.tipo,
        inicioEm: req.body.inicioEm,
        fimEm: req.body.fimEm,
    }

    res.status(201).send({
        mensagem: 'Rota utilizada para criar uma reserva.',
        reservaCriada: {
            tipo: reserva.tipo,
            inicioEm: reserva.inicioEm,
            fimEm: reserva.fimEm,
            id: Math.random().toString(26).slice(2),
            status: "ativa",
            criadoEm: date.toISOString()
        }
    })
});

router.get('/:id', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Rota utilizada para buscar uma reserva, a partir de um id.',
    })
});

router.put('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Rota utilizada para editar uma reserva, a partir de um id.'
    })
});

router.delete('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Rota utilizada para remover uma reserva, a partir de um id.'
    })
});

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Rota utilizada para obter uma lista de reservas.'
    })
});

module.exports = router;