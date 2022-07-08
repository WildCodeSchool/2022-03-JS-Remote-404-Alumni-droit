const express = require("express");
const { validateUser, validateLogin } = require("./middlewares/userMiddleware");

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

router.get("/diplome", FilterDiplomeController.browse);
router.get("/profession", FilterProfessionController.browse);
router.get("/promotion", FilterPromotionController.browse);
router.get("/master", MasterController.browse);

router.post("/signIn", validateUser, UserController.add);
router.post("/login", validateLogin, UserController.login);

router.put("/user/update/:id", UserController.edit);

// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
