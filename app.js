const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/', function(req, res) {
    res.render('login/login');
});

app.get('/jivo2', function(req, res) {
    res.render('jivo2');
});

app.post('/logged', function(req, res) {
    console.log('Username inputed: ' + req.body.username);
    console.log('Password inputed: ' + req.body.password);
    console.log('Hidden field value: ' + req.body.hidDepartment);
    res.render('login/logged', { data: req.body });
});

app.use(function(req, res, next) {
    res.status(404);

    res.format({
        html: function() {
            res.render('error/404', { url: req.url })
        },
        json: function() {
            res.json({ error: 'Not found' })
        },
        default: function() {
            res.type('txt').send('Not found')
        }
    })
});

app.listen(process.env.PORT || 8080, function() {
    console.log('App em execução. Disponível na porta ' + process.env.PORT);
});