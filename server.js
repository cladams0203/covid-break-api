const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

const data = require('./data/index')

server.get('/', (req,res) => {
    setTimeout(() => {
        res.status(200).json(data)
    }, 3000)
})

module.exports = server