const express = require('express')

// Setup express app
const app = express()

// Mount API routes on /api/*
const api = require('./api')()
app.use('/api', api)

// Use port depending on environment
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8081

// Finally, start app
app.listen(port)