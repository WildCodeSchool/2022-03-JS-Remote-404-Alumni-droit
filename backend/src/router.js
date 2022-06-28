const express = require("express");
const { validateUser } = require("./middlewares/userMiddleware");

const { ProfileController, UserController } = require("./controllers");

const router = express.Router();

router.get("/annuaire", ProfileController.browse);
router.get("/annuaire/:id", ProfileController.read);
router.get("/count", ProfileController.count);

router.post("/signIn", validateUser, UserController.add);

// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
