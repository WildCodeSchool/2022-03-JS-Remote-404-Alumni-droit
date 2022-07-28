const express = require("express");
const {
  validateUser,
  validateLogin,
  checkAuth,
  checkRights,
  checkVisibility,
  decodeCookie,
} = require("./middlewares/userMiddleware");
const { preparedDataForSignIn } = require("./middlewares/dataMiddleware");

const {
  ProfileController,
  UserController,
  DiplomeController,
  JobController,
  PromotionController,
  MasterController,
} = require("./controllers");

const router = express.Router();

router.get("/annuaire", decodeCookie, ProfileController.browse);
router.get(
  "/annuaire/:id",
  decodeCookie,
  checkVisibility,
  ProfileController.read
);
router.get("/count", ProfileController.count);

router.get("/diplome", DiplomeController.browse);
router.get("/profession", JobController.browse);
router.get("/promotion", PromotionController.browse);
router.get("/master", MasterController.browse);

router.post("/signup", preparedDataForSignIn, validateUser, UserController.add);
router.post("/login", validateLogin, UserController.login);

router.put("/user/update/:id", checkAuth, checkRights, UserController.edit);
router.put(
  "/profile/update/:id",
  checkAuth,
  checkRights,
  ProfileController.edit
);

router.delete(
  "/annuaire/delete/:id",
  checkAuth,
  checkRights,
  ProfileController.delete
);
router.delete(
  "/user/delete/:id",
  checkAuth,
  checkRights,
  UserController.delete
);

module.exports = router;
