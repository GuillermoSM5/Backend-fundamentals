const router = require('express').Router();
const {validacion} = require('../controllers/validacion');

router.get('/',function(req,res){res.send('Estas en el apartado de validacion') });

router.get('/:name',validacion);

module.exports = router;