var router = require('express').Router();
const client = require('../controllers/client.controller')

router.post('/nauveauclient',client.noveau);
router.get('/voirclient/:id',client.voirClient);
router.get('/voirlisteclient',client.listesClient);
router.delete('/supprimerclient/:id',client.supprimer);

module.exports = router;