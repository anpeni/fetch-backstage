const express = require('express');
const app = express();
const subs = require('./subs.json');

app.get('/subs', (req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.json(subs);
});

app.post('/subs', (req, res) => {
// Aquí puedes manejar la solicitud POST y actualizar los datos en el archivo subs.json
res.json({ message: 'Datos actualizados' });
});

app.listen(3001, () => {
console.log('Servidor en ejecución en el puerto 3001');

});