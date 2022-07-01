var router = require('express').Router();
const appeloffre = require('../controllers/marcher.controller')

router.get('/infomarcher/:id',appeloffre.afficheinfoid);
router.get('/infomarcher/:titre',appeloffre.afficheinfotitre);
router.get('/listedesmarches',appeloffre.listes);
router.put('/modifiermarcher/:id',appeloffre.modifierid);
router.delete('/supprimermarcher/:id',appeloffre.supprimerid);
router.put('/modifiermarcher/:titre',appeloffre.modifiertitre);
router.delete('/supprimermarcher/:titre',appeloffre.supprimertitre);
