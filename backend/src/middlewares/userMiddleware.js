const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

const validateUser = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().max(255).presence("required"),
    password: Joi.string().max(30).presence("required"),
    lastname: Joi.string().max(80).presence("required"),
    firstname: Joi.string().max(80).presence("required"),
    emailpro: Joi.string().max(255).presence("optional"),
    phone: Joi.string().max(37).presence("optional"),
    profession_id: Joi.number().max(30).presence("required"),
    employeur: Joi.string().max(255).presence("optional"),
    poste: Joi.string().max(255).presence("optional"),
    bio: Joi.string().max(1000).presence("optional"),
    siteweb: Joi.string().max(255).presence("optional"),
    facebook: Joi.string().max(255).presence("optional"),
    linkedin: Joi.string().max(255).presence("optional"),
    twitter: Joi.string().max(255).presence("optional"),
    instagram: Joi.string().max(255).presence("optional"),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const validateUpdate = (req, res, next) => {
  const { error } = Joi.object({
    lastname: Joi.string().max(80).presence("required"),
    firstname: Joi.string().max(80).presence("required"),
    emailpro: Joi.string().max(255).presence("optional"),
    phone: Joi.string().max(37).presence("optional"),
    profession_id: Joi.number().max(30).presence("required"),
    employeur: Joi.string().max(255).presence("optional"),
    poste: Joi.string().max(255).presence("optional"),
    bio: Joi.string().max(1000).presence("optional"),
    siteweb: Joi.string().max(255).presence("optional"),
    facebook: Joi.string().max(255).presence("optional"),
    linkedin: Joi.string().max(255).presence("optional"),
    twitter: Joi.string().max(255).presence("optional"),
    instagram: Joi.string().max(255).presence("optional"),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().max(255).presence("required"),
    password: Joi.string().max(30).presence("required"),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json("Les champs saisis sont incorrects");
  }
};

const checkAuth = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_AUTH_SECRET,
      (err, decode) => {
        if (err) {
          res.status(401).send("You dont have the correct rights");
        } else {
          req.access_token = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send("You dont have the correct rights");
  }
};
// Check is_valid
const checkRights = async (req, res, next) => {
  const user = await models.user.findByMail(req.access_token.email);
  if (user[0].id === parseInt(req.params.id, 10) || user[0].role === "admin") {
    next();
  } else {
    res.status(401).send("You dont have the correct rights");
  }
};

const decodeCookie = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_AUTH_SECRET,
      (err, decode) => {
        if (err) {
          req.access_token = false;
          next();
        } else {
          req.access_token = decode;
          next();
        }
      }
    );
  } else {
    req.access_token = false;
    next();
  }
};

module.exports = {
  validateUser,
  validateLogin,
  validateUpdate,
  checkAuth,
  checkRights,
  decodeCookie,
};
