const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ENV = require("../config/env");
const createError = require("../middlewares/error");
const sendEmail = require('../services/nodemailer');

// MODEL
const ModelUsers = require("../models/user.model");
// SELECT * FROM user 
const postUser = async (req, res) => {
  try {
// CODE HERE  
await ModelUsers.create({
  username:'terence',
  email:'test@gmail.com'
})
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json(error.message);
  }
};

const sign = async (req, res, next) => {
  try {
// CODE HERE

  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json(error.message);
  }
};



const getAllUsers = async (req, res) => {
  try {

  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json(error.message)
  }
};

const getUser = async (req, res) => {
  try {


  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json(error.message)
  }
};

const deleteUser = async (req, res, next) => {
  try {

  } catch (error) {
    console.log("Error : ", error.message);
    next(createError(500, error.message))
  }
};

const updateUser = async (req, res, next) => {
  try {
   
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports = {
  postUser,
  sign,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
