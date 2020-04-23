const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs');

// Importação do arquivo de rotas principal
const main_routes = require('../app/routes/routes');
main_routes(app);

module.exports.app = app;