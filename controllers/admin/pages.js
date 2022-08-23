const Coworking = require('../../model/Coworking');
const Home = require('../../model/Home')
const Contact = require('../../model/Contact')

module.exports = {
  page: async (req, res) => {
    if(req.params.name === 'contact'){
      const contact = await Contact.find()
      res.render(`admin/${req.params.name}/${req.params.nam}`, {
        layout: 'admin',
        contact: contact[0]
      })
    }else if(req.params.name === 'coworking'){
      const coworking = await Coworking.find();
      res.render(`admin/${req.params.name}/${req.params.nam}`, {
        layout: 'admin',
        coworking: coworking[0]
      })
    }else if(req.params.name === 'home'){
      const home = await Home.find();
    res.render(`admin/${req.params.name}/${req.params.nam}`, {
      layout: 'admin',
      home: home[0]  
    })
    }
    
  }
}