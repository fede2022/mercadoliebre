const express = require ('express');
const app = express();

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
})

const path = require ('path');

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post('/register', (req, res) => {
    res.redirect('/');
});

app.post('/', (req, res) => {
    res.redirect('/');
});