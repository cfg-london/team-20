// Load config
const { database } = require('../config.json')
console.log('Loaded config')

// Setup PG pool
const { Pool } = require('pg')
const db = new Pool(database)
console.log('Created database connection')

// Setup express app
const app = express()

// Mount API routes on /api/*
const api = require('./api')(db)
app.use('/api', api)

// Use port depending on environment
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8081

// Finally, start app
app.listen(port, () => console.log(`Listening on port ${port}`))