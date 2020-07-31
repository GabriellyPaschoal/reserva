const express = require('express');
const router = express.Router();
const reservasController = require('../Controller/reservasController');
const { routes } = require('../app');

//router.get('/read', reservasController.get);
router.post('/create,', reservasController.post);
//router.put('/update', reservasController.put);
//router.delete('/delete', reservasController.delete);

module.exports =  router;



