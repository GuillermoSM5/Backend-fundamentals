var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1',require('./routes'));

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(400).json({
        status: 'error',
        name: err.message,
        message: err.message,
    })
  })

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Escuchando en el puerto ' + server.address().port);
  });