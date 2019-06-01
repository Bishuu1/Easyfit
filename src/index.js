const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//Inicializacion
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
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

