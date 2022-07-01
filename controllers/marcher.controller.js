const {  sequelize,Marcher } = require('../models')

exports.afficheinfoid = async(req,res)=>{
    const id = req.params.id;
    try {
        const marcher = await Marcher.findOne({
          where: { id }
        })
        return res.json(marcher)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
    }
exports.afficheinfotitre =async(req,res)=>{
        const titre = req.params.titre;
        try {
            const marcher = await Marcher.findOne({
              where: { titre }
            })
            return res.json(marcher)
          } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'erreur 500' })
          }
        }
exports.listes =async (req,res)=>{
    try {
        const Mmrchers = await Marcher.findAll()
    
        return res.json(marchers)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
}
exports.modifierid =async (req,res)=>{
    const id = req.params.id;
    const {} = req.body
    try {
      const marcher = await Marcher.findOne({ where: { id } })
      marcher.create({ })
  
      return res.json(marcher)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'erreur 500' })
    }
 }
 exports.supprimerid =async (req,res)=>{
    const id = req.params.id
    try {
      const marcher = await Marcher.findOne({ where: { id } })
  
      await marcher.destroy()
  
      return res.json({ message: 'appel d\'Marcher supprimer' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'erruer 500' })
    }
}
exports.modifiertitre =async (req,res)=>{
  const titre = req.params.titre;
  const {} = req.body
  try {
    const marcher = await Marcher.findOne({ where: { titre } })
    marcher.create({ })

    return res.json(marcher)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'erreur 500' })
  }
}
exports.supprimertitre =async (req,res)=>{
  const titre = req.params.titre
  try {
    Marcher.destroy({
      where: {titre},
      truncate: false
    })

    return res.json({ message: 'appel d\'offre supprimer' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'erruer 500' })
  }
}