const express = require("express");
const { validateUser, validateLogin } = require("./middlewares/userMiddleware");
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

router.get("/annuaire", ProfileController.browse);
router.get("/annuaire/:id", ProfileController.read); // ajouter middleware pour vérifier  is_private && is_valid === true
router.get("/count", ProfileController.count);

router.get("/diplome", DiplomeController.browse);
router.get("/profession", JobController.browse);
router.get("/promotion", PromotionController.browse);
router.get("/master", MasterController.browse);

router.post(
  "/sign_up",
  preparedDataForSignIn,
  validateUser,
  UserController.add
);
router.post("/login", validateLogin, UserController.login);

router.put("/user/update/:id", UserController.edit);
router.put("/profile/update/:id", ProfileController.edit);

router.delete("/annuaire/delete/:id", ProfileController.delete);
router.delete("/user/delete/:id", UserController.delete);

// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
