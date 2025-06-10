// Fonction pour créer une erreur personnalisée
const createError = (status, message, details = null) => {
  // Crée une nouvelle instance d'erreur avec le message fourni
  const error = new Error(message);
  
  // Ajoute une propriété "status" à l'erreur pour stocker le code d'état HTTP
  error.status = status;
  
  // Ajoute une propriété "details" contenant des informations supplémentaires sur l'erreur (optionnel)
  error.details = details;
  
  // Retourne l'objet d'erreur personnalisé
  return error;
}

// Exporte la fonction pour pouvoir l'utiliser dans d'autres fichiers
module.exports = createError;
