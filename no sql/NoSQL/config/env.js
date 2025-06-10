const dotenv = require('dotenv'); 

dotenv.config();

const ENV = {
  PORT: process.env.PORT,
  TOKEN: process.env.TOKEN,
  NOM_DOMAINE: process.env.NOM_DOMAINE,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  DB_NAME: process.env.DB_NAME,
  MONGO_URI: process.env.MONGO_URI,
  PORT_APPLICATION_FRONT: process.env.PORT_APPLICATION_FRONT,
  MONGO_URI_LOCAL: process.env.MONGO_URI_LOCAL
}

module.exports = ENV;