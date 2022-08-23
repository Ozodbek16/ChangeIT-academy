const Coworking = require('../model/Coworking')

module.exports =async (req, res, next) => {
    const coworking = await Coworking.find()
    res.locals.coworking = coworking[0]
    next()
};