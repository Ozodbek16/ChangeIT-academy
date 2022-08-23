const express = require('express')
const router = express.Router()
const Links = require('../../model/links')

router.get('/', async (req, res) => {
    const link = await Links.find()
    res.render('admin/links', {
        layout: 'admin',
        links: link
    })
})

router.post('/edit/:name', async (req, res) => {
    await Links.findOneAndUpdate(req.body)
    res.redirect('back')
})

module.exports = router