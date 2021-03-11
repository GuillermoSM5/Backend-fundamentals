function validacion(req,res){
    
    if (req.params.name === "aquel-que-no-debe-ser-nombrado") {
        throw new Error("Este usario no es correcto");
     }
     else res.send(`Hola ${req.params.name}`);
          
}

module.exports = {validacion};