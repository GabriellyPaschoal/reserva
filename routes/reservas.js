const express = require('express'); //importo express
const router = express.Router(); //roteamento

router.post('/', (req, res, next) => { //envia os dados do cliente, dentro do corpo da requisicao
    const date = new Date(); //cria uma constante e instancia um objeto Date
    let reserva = { 
        tipo: req.body.tipo,
        inicioEm: req.body.inicioEm,
        fimEm: req.body.fimEm,
    }

    res.status(201).send({
        mensagem: 'Rota utilizada para criar uma reserva.reserva',
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

router.get('/:id', (req, res, next) => { //trazer somente uma informaçao/ editar
    res.status(200).send({
        mensagem: 'Rota utilizada para buscar uma reserva, a partir de um id.',
    })
});

router.put('/:id', (req, res, next) => { //atualizacao
    res.status(201).send({
        mensagem: 'Rota utilizada para editar uma reserva, a partir de um id.'
    })
});

router.delete('/:id', (req, res, next) => { //deletar
    res.status(201).send({
        mensagem: 'Rota utilizada para remover uma reserva, a partir de um id.'
    })
});

router.get('/', (req, res, next) => { //trazer a lista com todos os agendamentos
    res.status(200).send({
        mensagem: 'Rota utilizada para obter uma lista de reservas.'

    })
});

module.exports = router;