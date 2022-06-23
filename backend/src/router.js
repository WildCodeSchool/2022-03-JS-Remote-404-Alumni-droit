const express = require("express");

const {
  ProfileController,
  FilterDiplomeController,
  FilterProfessionController,
  FilterPromotionController,
} = require("./controllers");

const router = express.Router();

router.get("/annuaire", ProfileController.browse);
router.get("/annuaire/:id", ProfileController.read);

router.get("/diplome", FilterDiplomeController.browse);
router.get("/profession", FilterProfessionController.browse);
router.get("/promotion", FilterPromotionController.browse);

// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
