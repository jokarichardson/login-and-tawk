const app = require('./src/config/custom-config').app;

app.listen(process.env.PORT || 8080, function() {
    console.log('App em execução. Disponível na porta ' + process.env.PORT);
});