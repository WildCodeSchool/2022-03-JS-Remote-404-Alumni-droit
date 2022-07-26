const preparedDataForSignIn = (req, res, next) => {
  const diplome = [];
  const master = [];
  const profile = {};
  Object.keys(req.body).forEach((key) => {
    if (key.includes("diplome")) {
      const [cle, index] = key.split("_");

      diplome[index] = { ...diplome[index], [cle]: req.body[key] };
    } else if (key.includes("master")) {
      const [cle, index] = key.split("_");

      master[index] = { ...master[index], [cle]: req.body[key] };
    } else {
      profile[key] = req.body[key];
    }
  });
  delete profile.confirmedPassword;
  req.diplome = diplome;
  req.master = master;
  req.profile = profile;
  next();
};

module.exports = { preparedDataForSignIn };
