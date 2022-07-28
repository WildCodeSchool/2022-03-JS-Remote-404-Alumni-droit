const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

const nope = "Vous ne disposez pas des droits nécessaires à cette opération";

const validateUser = (req, res, next) => {
  const data = { ...req.profile };
  Object.keys(data).forEach((el) => {
    if (data[el] === "" || data[el] === null) delete data[el];
  });
  const { error } = Joi.object({
    email: Joi.string().max(255).presence("required"),
    password: Joi.string().max(30).presence("required"),
    lastname: Joi.string().max(80).presence("required"),
    firstname: Joi.string().max(80).presence("required"),
    emailpro: Joi.string().max(255).presence("optional"),
    phone: Joi.string().max(37).presence("optional"),
    profession_id: Joi.string().max(30).presence("required"),
    employeur: Joi.string().max(255).presence("optional"),
    poste: Joi.string().max(255).presence("optional"),
    bio: Joi.string().max(1000).presence("optional"),
    siteweb: Joi.string().max(255).presence("optional"),
    facebook: Joi.string().max(255).presence("optional"),
    linkedin: Joi.string().max(255).presence("optional"),
    twitter: Joi.string().max(255).presence("optional"),
    instagram: Joi.string().max(255).presence("optional"),
    is_private: Joi.boolean().presence("required"),
    mastersId: Joi.array().presence("optional"),
    diplomesId: Joi.array().presence("optional"),
    diplome_0: Joi.string().max(30).presence("optional"),
    diplomeYear_0: Joi.string().max(4).presence("optional"),
    master_0: Joi.string().max(30).presence("optional"),
    masterYear_0: Joi.string().max(4).presence("optional"),
    masterName_0: Joi.string().max(30).presence("optional"),
    masterLocation_0: Joi.string().max(30).presence("optional"),
    diplome_1: Joi.string().max(30).presence("optional"),
    diplomeYear_1: Joi.string().max(4).presence("optional"),
    master_1: Joi.string().max(30).presence("optional"),
    masterName_1: Joi.string().max(30).presence("optional"),
    masterYear_1: Joi.string().max(4).presence("optional"),
    masterLocation_1: Joi.string().max(30).presence("optional"),
    diplome_2: Joi.string().max(30).presence("optional"),
    diplomeYear_2: Joi.string().max(4).presence("optional"),
    master_2: Joi.string().max(30).presence("optional"),
    masterYear_2: Joi.string().max(4).presence("optional"),
    masterName_2: Joi.string().max(30).presence("optional"),
    masterLocation_2: Joi.string().max(30).presence("optional"),
  }).validate(data, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const validateUpdate = (req, res, next) => {
  const data = { ...req.profile };
  Object.keys(data).forEach((el) => {
    if (data[el] === "") delete data[el];
  });
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
  }).validate(data, { abortEarly: false });

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
          res.status(401).send(nope);
        } else {
          req.access_token = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send(nope);
  }
};

const checkRights = async (req, res, next) => {
  const user = await models.user.findByMail(req.access_token.email);

  if (user[0] && user[0].role === "admin") {
    next();
  } else {
    res.status(401).send(nope);
  }
};

const checkVisibility = async (req, res, next) => {
  const visible = await models.profile.visible(req.params.id);
  if (!visible) {
    res.status(401).send(nope);
  } else if (visible.is_valid === 1) {
    next();
  } else {
    checkRights(req, res, next);
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
  checkVisibility,
  decodeCookie,
};
