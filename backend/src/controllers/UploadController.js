const fs = require("fs");
const models = require("../models");

class UploadController {
  static edit = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    item.id = parseInt(req.params.id, 10);

    models.item
      .update(item)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.item
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static upload = (req, res) => {
    res.send("Upload in progress");
    fs.rename(
      req.file.path,
      `public/alumnis/photos/${req.file.originalname}`,
      (err) => {
        if (err) {
          res.status(400).send("Error while uploading");
        } else {
          res
            .status(200)
            .send(`${import.meta.env.VITE_BACKEND_URL}/public/images/`);
        }
      }
    );
  };
}

module.exports = UploadController;
