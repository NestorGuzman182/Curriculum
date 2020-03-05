const express = require ('express');
const path = require('path');
const app = express();
const files = path.join (__dirname, '/public/views');


app.use(express.static(path.join(__dirname,'/public')))



app.get('/', (req, res)=>{
    res.sendFile(`${files}/index.html`);
});

app.get('/estudios', (req, res)=>{
    res.sendFile(`${files}/estudios.html`);
});
app.get('/experiencia', (req, res)=>{
    res.sendFile(`${files}/experencias.html`);
});
app.get('/referiencias', (req, res)=>{
    res.sendFile(`${files}/Referencias.html`);
});


app.get('/contacto', (req, res)=>{
    res.sendFile(`${files}/form.html`);
});

app.get('/confirmacion', (req, res)=>{
    res.sendFile(`${files}/confirmacion.html`);
});

app.listen(4200, ()=>{
    console.log('server 4200');
});
