

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const puerto = process.env.PRTO || 3000;
const cors = require('cors');

const app = express();

app.set('view engine', 'hbs');
hbs. registerPartials(__dirname + '/view/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.render('dashboard');
})

app.get('/categorias', (req,res)=>{
    res.render('categorias');
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(puerto,() =>{
    console.log('El servidor esta corriendo en el puerto : ', puerto);
})

