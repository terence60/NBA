const Article = require('../models/article.model');

// Créer un nouvel Article 
const postArticle = async (req, res) => {
  try{

  }catch(error){
    console.log('Error : ', error.message)
    res.status(500).json(error.message)
  }
}

// RÉCUPÉRER TOUS LES ARTICLES
const getAllArticles =  async (req, res) => {
  try{

  }catch(error){
    console.log('Error : ', error.message)
    res.status(500).json(error.message)
  }
}

// Récupére un article par son id
const getArticle = async (req, res) => {
  try{

  }catch(error){
    console.log('Error : ', error.message)
    res.status(500).json(error.message)
  }
}

// Mettre à jours un article par son id
const updateArticle = async (req, res) => {
  try{

  }catch(error){
    console.log('Error : ', error.message)
    res.status(500).json(error.message) 
  }
}

// Supprimer un article
const deleteArticle = async (req, res) => {
  try{

  }catch(error){
    console.log('Error : ', error.message)
    res.status(500).json(error.message)
  }
}



 // Route GET pour récupérer tous les articles par prix croissant
const  ascArticle = async (req, res) => {
  try {

  } catch (error) {
     console.log('Error : ', error.message);
     res.status(500).json(error.message)
  }
 }

  // Route GET pour récupérer tous les articles par prix croissant
  const  descArticle =  async (req, res) => {
  try {

  } catch (error) {
     console.log('Error : ', error.message);
     res.status(500).json(error.message)
  }
 }

 module.exports = {
  postArticle,
  getAllArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  ascArticle,
  descArticle
 }
