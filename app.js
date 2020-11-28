require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
    res.json('🦆');
});

app.get('/token', (req, res) => {
    res.json({
        message: process.env.API_KEY,
    });
})


app.listen(3000, () => {
    console.log('Server running on PORT 3000');
})