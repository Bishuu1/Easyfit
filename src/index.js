const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
<<<<<<< HEAD
=======
const cors = require("cors");
>>>>>>> Fix

//Inicializacion
const app = express();

//Configuracion
<<<<<<< HEAD
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
=======
app.set('port', process.env.PORT || 9000);

//Middlewares
app.use(morgan( 'dev' ));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

>>>>>>> Fix

//Variables Globales


//Route
app.use(require('./routes/index.js'));
app.use(require('./routes/authenthication.js'));
app.use(require('./routes/easyfit.js'));

//Public
app.use(express.static(path.join(__dirname, 'public'))); 

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

