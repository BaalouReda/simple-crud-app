

const {  sequelize, Client,Offre,Marcher } = require('../models')



exports.noveauoffre = async (req,res)=>{
  const client = req.body.maitreouvrage;
  if (  await Client.findOne({
    where: { client , type:"etat" }
  })) {
    const nom= req.body.numero
          try {
            const offre = await Offre.create({ })
        
            return res.json(offre)
          } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'erreur 500' })
          }
      }else {
    return res.status(500).json({ error: 'erreur 404 ' })
  }
  
}
exports.valider = async (req,res)=>{
    const id = req.params.id;
    try {
        Offre.destroy({
            where: { id }
          })
          Marcher.create(req.body)
            
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
    }
exports.afficheinfoid = async(req,res)=>{
    const id = req.params.id;
    try {
        const offre = await Offre.findOne({
          where: { id }
        })
        return res.json(offre)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
    }
exports.afficheinfotitre =async(req,res)=>{
        const titre = req.params.titre;
        try {
            const offre = await Offre.findOne({
              where: { titre }
            })
            return res.json(offre)
          } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'erreur 500' })
          }
        }
exports.listes =async (req,res)=>{
    try {
        const offres = await Offre.findAll()
    
        return res.json(offres)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'erreur 500' })
      }
}
exports.modifierid =async (req,res)=>{
    const id = req.params.id;
    const {} = req.body
    try {
      const offre = await Offre.findOne({ where: { id } })
      offre.create({ })
  
      return res.json(offre)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'erreur 500' })
    }
 }
 exports.supprimerid =async (req,res)=>{
    const id = req.params.id
    try {
      const offre = await Offre.findOne({ where: { id } })
  
      await offre.destroy()
  
      return res.json({ message: 'appel d\'offre supprimer' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'erruer 500' })
    }
}
exports.modifiertitre =async (req,res)=>{
  const titre = req.params.titre;
  const {} = req.body
  try {
    const offre = await Offre.findOne({ where: { titre } })
    offre.create({ })

    return res.json(offre)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'erreur 500' })
  }
}
exports.supprimertitre =async (req,res)=>{
  const titre = req.params.titre
  try {
    Offre.destroy({
      where: {titre},
      truncate: false
    })

    return res.json({ message: 'appel d\'offre supprimer' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'erruer 500' })
  }
}