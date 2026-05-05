require('dotenv').config();

const express = require('express');
const path = require('path');

const characterRoutes = require('./src/routes/characterRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src", "views"));

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended:true }));

app.use('/', characterRoutes);

app.get('/add-character', (req, res) => {
    res.render('add-character', { title: 'Bæta við persónu' });
});

app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}`);
});