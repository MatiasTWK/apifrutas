const express = require('express');
const app = express();

app.use(express.json());

const frutas = [
    {id: 1, nombre :'Kilo de palta', precio: 3500},
    {id: 2, nombre:'Kilo de manzanas verde', precio:3950},
    {id: 3, nombre:'Kilo de frutillas', precio:3490},
    {id: 4, nombre:'Kilo de pepino dulce', precio:2590},
    {id: 5, nombre:'Canasta frutas y verduras', precio:16900},
    {id: 6, nombre:'Kilo de limon', precio:890},
    {id: 7, nombre:'2 kilos de naranja', precio:2980},
    {id: 8, nombre:'Kilo de chirimoya', precio:3800},
    {id: 9, nombre:'Kilo de manzana fuji', precio:1980},
    {id: 10, nombre:'Paquete de acelga', precio:1980},
    {id: 11, nombre:'Paquete de betarraga (5 unidades)', precio:1490},
    {id: 12, nombre:'Aceituna de azapa 500 gramos', precio:2800},

];

app.get('/',(req,res) =>{
    res.send('Funcionando');
});

app.get('/api/frutas', (req, res) => {
    res.send(frutas);
})

app.get('/api/frutas/:id', (req,res) => {
    const fruta = frutas.find(c => c.id === parseInt(req.params.id));
    if (!fruta) return res.status(404).send('Fruta no encontrada');
    else res.send(fruta);
});

app.post('/api/frutas', (req, res) => {
    const fruta = {
        id: frutas.length + 1,
        nombre: req.body.nombre,
        precio: parseInt(req.body.precio),
    };
    
    frutas.push(fruta);
    res.send(fruta);
});

app.delete('/api/frutas/:id', (req, res) => {
    const fruta = frutas.find(c => c.id === parseInt(req.params.id));
    if (!fruta) return res.status(404).send('Fruta no encontrada');

    const index = frutas.indexOf(fruta);
    frutas.splice(index, 1);
    res.send(fruta);
});

const port = process.env.PORT || 3000;
app.listen (port, () => console.log(`Server listo en ${port}`));