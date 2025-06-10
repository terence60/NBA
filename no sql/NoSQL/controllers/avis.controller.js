const Avis = require('../models/avis.model');
const Article = require('../models/article.model');

// Route POST pour la création d'un nouvel Avis
const postAvis = async (req, res) => {
  try{

  }catch(error){
    console.log('Error : ', error.message);
    res.status(500).json(error.message)
  }
}

module.exports = {
  postAvis
}