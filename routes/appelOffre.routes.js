var router = require('express').Router();
const appeloffre = require('../controllers/appelOffre.controller')
router.post('/noveauoffre',appeloffre.noveauoffre);
router.put('/valideroffre/:id',appeloffre.valider);
router.get('/infooffree/:id',appeloffre.afficheinfoid);
router.get('/infooffree/:titre',appeloffre.afficheinfotitre);
router.get('/listedesoffres',appeloffre.listes);
router.put('/modifieroffre/:id',appeloffre.modifierid);
router.delete('/supprimeroffre/:id',appeloffre.supprimerid);
router.put('/modifieroffre/:titre',appeloffre.modifiertitre);
router.delete('/supprimeroffre/:titre',appeloffre.supprimertitre);

module.exports = router;