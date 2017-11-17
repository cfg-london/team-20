const express = require('express')

// Setup express app
const app = express()

// Mount API routes on /api/*
const api = require('./api')()
app.use('/api', api)


const port = process.env.PORT || 8080

// Finally, start app
app.listen(8080)