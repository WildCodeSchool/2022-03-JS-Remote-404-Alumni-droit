const express = require("express");
const { validateUser, validateLogin } = require("./middlewares/userMiddleware");

const {
  ProfileController,
  UserController,
  FilterDiplomeController,
  FilterProfessionController,
  FilterPromotionController,
} = require("./controllers");

const router = express.Router();

router.get("/annuaire", ProfileController.browse);
router.get("/annuaire/:id", ProfileController.read);
router.get("/count", ProfileController.count);

router.post("/signIn", validateUser, UserController.add);
router.post("/login", validateLogin, UserController.login);

router.get("/diplome", FilterDiplomeController.browse);
router.get("/profession", FilterProfessionController.browse);
router.get("/promotion", FilterPromotionController.browse);

// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
