const Router = require('express')
const router = new Router()

router.get('/', async (req, res) => {
    res.json('Ты попал в наш клуб')
})


module.exports = router