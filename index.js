const express = require('express') // librería express
const app = express()  // app es una instancia de la funcion express

app.get('/', function(req, res){
    res.send('Welcome')
})

app.listen(3000, function(){
    console.log('http://localhost:3000')
})
