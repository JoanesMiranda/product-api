const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://192.168.99.101:27017/nodeapi', { useNewUrlParser: true })

requireDir('./src/models')

app.use('/api', require('./src/routes.js'))
app.use(cors())

app.listen(3000, () => {
    console.log('Servidor ON')
})