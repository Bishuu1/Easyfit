const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");

//Inicializacion
const app = express();

//Configuracion
app.set('port', process.env.PORT || 9000);

//Middlewares
app.use(morgan( 'dev' ));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


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

