const { Router } = require('express')

module.exports = db => {
    const router = Router()
    
    // Tries to send all the data back
    router.get('/', (req, res) => {
        res.json({})
    })
    
    
    // Sends a list of the countries
    router.get('/countries', (req, res) => {
        res.json({})
    })
    
    
    // Get the data for a coutnry
    router.get('/:country/', (req, res) => {
        res.json({})
    })
    
    
    return router
}