const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(200).json({ status: 'OK' }))
app.get('/hello', (req, res) => res.status(200).json({ message: 'Hello!' }))

app.listen(3001, () => console.log('Server listen on port 3001'))
