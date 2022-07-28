// const { login } = require("../controllers/UserController");

const preparedDataForSignIn = (req, res, next) => {
  req.diplome = req.body.diplomesId.map((id, index) => ({
    id,
    year: req.body[`diplomeYear_${index}`],
  }));

  const profile = {};

  const master = [];
  Object.keys(req.body).forEach((key) => {
    if (key.includes("master")) {
      const [cle, index] = key.split("_");
      master[index] = { ...master[index], [cle]: req.body[key] };
    } else if (!key.includes("diplome")) {
      profile[key] = req.body[key];
    }
  });
  delete profile.confirmedPassword;
  req.profile = profile;
  req.master = master;
  next();
};

module.exports = { preparedDataForSignIn };
