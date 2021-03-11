const router = require('express').Router();
const { 
    imprimirUsuario,
    saludar,
    Mayusculas
}=require('../controllers/usuario');

// router.get('/:name', saludar);
router.get('/:name', Mayusculas);

router.put('/',imprimirUsuario);



module.exports= router;