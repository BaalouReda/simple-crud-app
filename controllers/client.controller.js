
const {  sequelize, Client} = require('../models')
exports.noveau =async (req,res)=>{
    if (!req.body.title) {
        res.status(400).send({
          message: "erreur 404 !!"
        });
        return;
      }
    
      const { } = req.body

      try {
        const user = await Client.create({ })
    
        return res.json(user)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
}
exports.voirClient =async (req,res)=>{
    const id = req.params.id;
    try {
        const client = await Client.findOne({
          where: { id }
        })
        return res.json(client)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
    }
exports.listesClient =async (req,res)=>{
    try {
        const clients = await Client.findAll()
    
        return res.json(clients)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
    }
exports.supprimer =async(req,res)=>{
    const id = req.params.id
    try {
      const client = await Client.findOne({ where: { id } })
  
      await client.destroy()
  
      return res.json({ message: 'client supprimer' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'erruer 500' })
    }
}