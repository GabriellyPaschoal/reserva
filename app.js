const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reservaRota = require('./routes/reservas');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/reservas', reservaRota);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            menssagem: error.message
        }
    });
});

module.exports = app;