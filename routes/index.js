var router = require('express').Router();

router.get('/',(req, res)=>{
    res.send('Hola mundo');
})

router.use('/name',require('./usuarios'));
router.use('/validacion',require('./validacion'));

module.exports = router;
