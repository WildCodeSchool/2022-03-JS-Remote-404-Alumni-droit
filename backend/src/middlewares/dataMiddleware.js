// const { login } = require("../controllers/UserController");

const preparedDataForSignIn = (req, res, next) => {
  req.diplome = req.body.diplomesId.map((id, index) => ({
    id,
    year: req.body[`diplomeYear_${index}`],
  }));
  req.master = req.body.mastersId.map((id, index) => ({
    id,
    year: req.body[`masterYear_${index}`],
  }));
  const profile = {};
  Object.keys(req.body).forEach((key) => {
    if (!key.includes("master") || !key.includes("diplome")) {
      profile[key] = req.body[key];
    }
  });
  delete profile.confirmedPassword;
  // console.log(req.diplome);
  // console.log(req.master);
  req.profile = profile;
  next();
};

module.exports = { preparedDataForSignIn };
