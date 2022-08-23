const Contact = require('../model/Contact')
module.exports =async (req, res, next) => {
    const contact = await Contact.find()
    res.locals.contact = contact[0]
    next()
};