const fs = require('fs')
const path = require('path')


module.exports = async (file) => {
    const filePath = path.join(__dirname, '..', 'public', 'uploads', file);

    return new Promise((res, rej) => {
        fs.unlink(filePath, (err) => {
            if (err) rej(err);
            res()
        })
    })
}