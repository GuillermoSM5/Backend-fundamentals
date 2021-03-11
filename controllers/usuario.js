function saludar(req,res){
    res.send(`hola ${req.params.name}`)
}

function imprimirUsuario(req,res){
    console.log(req.body)
    res.send('holas')
}

function Mayusculas(req,res){
 const respuesta = req.params.name;
 res.send(`hola ${respuesta.toUpperCase()}`); 
}

module.exports = {
    imprimirUsuario,
    saludar,
    Mayusculas
   };