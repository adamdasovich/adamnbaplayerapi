const express = require('express')
const app = express();
const importData = require('./data.json')
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello sammy')
})

app.get('/players', (req, res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log(`the server is listening on port: ${port}`)
})