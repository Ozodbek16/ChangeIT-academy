const express = require('express')
const Users = require('../../model/Users')
const router = express.Router()
router.get('/', async (req, res) => {
    res.render('admin/users', {
        users: await Users.find(),
        layout: 'admin'
    })
})

module.exports = router