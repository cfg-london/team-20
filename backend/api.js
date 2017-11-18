const { Router } = require('express')
const multer = require('multer')
const { lookup } = require('country-data')

const upload = multer({ dest: 'data/' })

const parse = require('./parser')

module.exports = db => {
    const router = Router()

    // Sends a list of the countries
    router.get('/countries', async(req, res) => {
        try {
            const { rows } = await db.query('SELECT country FROM surveys')

            const countries = rows.reduce((acc, {country}) => [...acc, country] , [])

            res.json({ countries })

        } catch ({ message }) {
            res.json({ error: message })
        }

    })


    // Get the data for a country code
    router.get('/country/:countryCode/', async(req, res) => {
        const { countryCode } = req.params

        const { name } = lookup.countries({ alpha3: countryCode })[0]

        try {
            const { rows } = await db.query('SELECT * FROM surveys WHERE LOWER(country) = LOWER($1)', [name])

            const indicators = rows[0].information.reduce((acc, e) => ({...acc, ...e}), {})


            res.json({ indicators })


        } catch ({ message }) {
            res.json({ error: message })
        }

    })


    // Update dataset
    router.post('/upload', upload.single('data'), async (req, res) => {
        const { path } = req.file

        try {
            parse(path, async data => {
                await db.query('DELETE FROM surveys')

                Object.entries(data.countries).forEach(async ([country, survey]) => {
                    await db.query('INSERT INTO SURVEYS VALUES ($1, $2)', [country, JSON.stringify(survey)])
                })

            })
            
            res.json({ success: true })

        } catch ({ message }) {
            res.json({ error: message })
        }
    })

    return router
}
