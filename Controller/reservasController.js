exports.message = function (req, res){
    res.send('reservado na porta 3000')
};

exports.post = function (req, res){
    res.status(200).send({
        tipo: reserva.tipo,
        inicioEm: reserva.inicioEm,
        fimEm: reserva.fimEm,
        id: Math.random().toString(26).slice(2),
        status: "ativa",
        criadoEm: date.now()
    })
}