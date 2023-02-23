require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;

//Servir contenido estatico // se hace uso de un middelware
app.use(express.static('public'));
// ##HABDLBARS
//renderizar mediante handelbars hbs // por defecto busca en la carpeta views
app.set('view engine', 'hbs');
//registrando vistas parciales
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//las rutas tienen prioridad desde la carpetas del public, de alli van buscando los files sueltos
app.get('/',  (req, res) => {
//renderizando cliente:   res.send('Hello World');
//renderizando en el servidor con hbs;
    res.render('home', {
        nombre: 'Jean'
    });
});
app.get('/generic',  (req, res) => {
    // res.sendFile(__dirname+'/public/generic.html');
    res.render('generic');
});
app.get('/elements',  (req, res) => {
    // res.sendFile(__dirname+'/public/elements.html');
    res.render('elements');
});

app.get('*',  (req, res) => {
    // res.sendFile(__dirname+'/public/404.html');
    res.sendFile('404.html', {root: 'public'});
  });

app.listen(port, () => {
    console.log(`Apliccation run in puerto: ${port}`);
})