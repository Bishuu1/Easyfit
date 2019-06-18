const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

//Inicializacion
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

//Variables Globales
app.use((req, res, next) => {

    next();
});

//Route
app.use(require('./routes'));
app.use(require('./routes/authenthication.js'));
app.use(require('./routes/easyfit.js'));

//Public
app.use(express.static(path.join(__dirname, 'public'))); 

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

