const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, "scr", "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', showRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Síða fannst ekki' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Eitthvað fór úrskeiðist');
});

app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}`);
});