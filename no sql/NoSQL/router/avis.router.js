// Importation du module express
const express = require('express');
// Creation d'un router express
const router = express.Router();

const AvisController = require('../controllers/avis.controller')

router.post('/add', AvisController.postAvis)

module.exports = router;