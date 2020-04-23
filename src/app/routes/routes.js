module.exports = (app) => {

    app.get('/', function(req, res) {
        res.render('login/login');
    });

    app.post('/logged', function(req, res) {
        console.log('Username informado: ' + req.body.username);
        console.log('Tipo de Cliente: ' + req.body.tipoCliente);
        res.render('login/logged', { data: req.body });
    });

    app.get('/about', function(req, res) {
        res.render('about');
    });

    app.use(function(req, res, next) {
        res.status(404);

        res.format({
            html: function() {
                res.render('../views/error/404', { url: req.url })
            },
            json: function() {
                res.json({ error: 'Not found' })
            },
            default: function() {
                res.type('txt').send('Not found')
            }
        })
    });
}