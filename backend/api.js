const { Router } = require('express')

module.exports = () => {
    const router = Router()
    
    // Tries to send all the data back
    router.get('/', (req, res) => {
        res.json({
        
        })
    })
    
    
    return router
}