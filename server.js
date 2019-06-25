const express = require ('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Helo Unit');
});

app.listen(3000);

