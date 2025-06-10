const jwt = require('jsonwebtoken');
const ENV = require('../config/env');
const createError = require('./error');


const verifieToken = (req, res, next) => {
  // Récupère le jeton (token) JWT  à partir des cookies de la requête
  const token = req.cookies.access_token;

  // Si le token n'est pas présent, renvoie une erreur 401 (accès refusé)
  if(!token) return next(createError(401, 'Acces Denied'));

  // VERIFIER LA VALIDITÉ DU TOKEN EN UTILISANT JWT.VERIFY
  jwt.verify(token, ENV.TOKEN, (error, user) => {
    // si une erreur se produit lors de la verification du token
    if(error)
    {
      //Renvoie une 403 (interdit)
      // car le token n'est pas valide
      return next(createError(403,'Token non valide !', error.message))
    }
    // si la vérification réussit, ajoute les information de l'utilisateur dans l'objet req.
    req.user = user

    next()
  })
}

module.exports = verifieToken;