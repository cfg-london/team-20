const { Router } = require('express')
const { lookup } = require('country-data')

module.exports = db => {
    const router = Router()

    // Sends a list of the countries
    router.get('/countries', async(req, res) => {
        try {
            const { rows } = await db.query('SELECT country FROM surveys')

            res.json({ countries: rows })

        } catch ({ message }) {
            res.json({ error: message })
        }

    })


    // Get the data for a country code
    router.get('/country/:countryCode/', async(req, res) => {
        const { countryCode } = req.params

        const name = lookup.countries({ alpha3: countryCode })

        try {
            const { rows } = await db.query('SELECT * FROM surveys WHERE ')
            
        } catch ({ message }) {
            res.json({ error: message })
        }


        res.json({ name })
    })


    return router
}
