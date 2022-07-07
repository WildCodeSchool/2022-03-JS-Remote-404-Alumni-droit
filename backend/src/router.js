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
router.get("/annuaire/:id", ProfileController.read);
router.get("/count", ProfileController.count);

router.post("/signIn", validateUser, UserController.add);
router.post("/login", validateLogin, UserController.login);

router.get("/diplome", DiplomeController.browse);
router.get("/profession", JobController.browse);
router.get("/promotion", PromotionController.browse);
router.get("/master", MasterController.browse);

// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
